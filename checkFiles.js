const fs = require('fs');
const path = require('path');
const chardet = require('chardet');

const checkFileEncodingAndLineEndings = (filepath) => {
    // Check encoding
    const encoding = chardet.detectFileSync(filepath);
    if (encoding !== 'UTF-8' && encoding !== 'UTF-8-BOM') {
        console.log(`File ${filepath} is not UTF-8 with BOM.`);
        return false;
    }

    // Check for BOM
    const fileContent = fs.readFileSync(filepath);
    if (!fileContent.slice(0, 3).equals(Buffer.from([0xEF, 0xBB, 0xBF]))) {
        console.log(`File ${filepath} does not have BOM.`);
        return false;
    }

    // Check line endings
    const content = fileContent.toString('utf8');
    if (content.indexOf('\r\n') === -1) {
        console.log(`File ${filepath} does not have CRLF line endings.`);
        return false;
    }

    return true;
};

const main = () => {
    const baseDir = 'resources/lang';
    let allFilesValid = true;

    const walkSync = (dir, filelist = []) => {
        fs.readdirSync(dir).forEach(file => {
            const filepath = path.join(dir, file);
            if (fs.statSync(filepath).isDirectory()) {
                filelist = walkSync(filepath, filelist);
            } else {
                filelist.push(filepath);
            }
        });
        return filelist;
    };

    const rcFiles = walkSync(baseDir).filter(file => file.endsWith('.rc'));

    rcFiles.forEach(file => {
        if (!checkFileEncodingAndLineEndings(file)) {
            allFilesValid = false;
        }
    });

    if (!allFilesValid) {
        process.exit(1);
    } else {
        console.log("All .rc files have the correct encoding and line endings.");
    }
};

main();
