/**
 * CABAL ENCRYPTO
 */

// REQUIRED DEPENDENCIES

const md5 = require('md5');
const fs = require('fs');
const replace = require('replace-in-file');
const glob = require('glob');

// REQUIRED FILES

const DIR_LIST = require('./DIR_LIST.json');
const { table } = require('console');

// VARIABLES

const EncryptionFolder = "G_Items/"
var Options;

const FileUpdates = [
    "cabal.dec",
    "item.dec"
]

// RUNTIME

console.log("# CABAL CRYPTO # \nVersion: 0.0.0.3\n\n")

if (!fs.existsSync('./Encrypted')) {
    fs.mkdirSync('./Encrypted')
}

var ReplacementTable = [];

glob("**/*.ebm", function (er, files) {
    files.forEach(File => {
        if (!File.startsWith("G_Items/")) return;
        console.log(File) // G_Items/Weapons/ExcaliburPVE/cube/lc_cube9.ebm
        NewFileName = File.substring("Encrypted/".length, File.length)
        //console.log(NewFileName) // apons/ExcaliburPVE/cube/lc_cube9.ebm

        const MD5Code = md5(NewFileName) + md5(NewFileName)

        console.log("Changing " + File + " to " + MD5Code.substring(0, NewFileName.length - 4) + ".ebm")
        fs.renameSync('./' + File, "./Encrypted/" + MD5Code.substring(0, NewFileName.length - 4) + ".ebm")

        const ReplacementObject = {
            From: File,
            To: "Encrypted/" + MD5Code.substring(0, NewFileName.length - 4) + ".ebm"
        }
        ReplacementTable.push(ReplacementObject)
    })
})
glob("**/*.eps", function (er, files) {
    files.forEach(File => {
        if (!File.startsWith("G_Items/")) return;
        NewFileName = File.substring("Encrypted/".length, File.length)

        const MD5Code = md5(NewFileName) + md5(NewFileName)

        console.log("Changing " + File + " to " + MD5Code.substring(0, NewFileName.length - 4) + ".eps")
        fs.renameSync('./' + File, "./Encrypted/" + MD5Code.substring(0, NewFileName.length - 4) + ".eps")

        const ReplacementObject = {
            From: File,
            To: "Encrypted/" + MD5Code.substring(0, NewFileName.length - 4) + ".eps"
        }
        ReplacementTable.push(ReplacementObject)
    })
})
glob("**/*.ebs", function (er, files) {
    files.forEach(File => {
        if (!File.startsWith("G_Items/")) return;
        NewFileName = File.substring("Encrypted/".length, File.length)

        const MD5Code = md5(NewFileName) + md5(NewFileName)

        console.log("Changing " + File + " to " + MD5Code.substring(0, NewFileName.length - 4) + ".ebs")
        fs.renameSync('./' + File, "./Encrypted/" + MD5Code.substring(0, NewFileName.length - 4) + ".ebs")

        const ReplacementObject = {
            From: File,
            To: "Encrypted/" + MD5Code.substring(0, NewFileName.length - 4) + ".ebs"
        }
        ReplacementTable.push(ReplacementObject)
    })
})
glob("**/*.efx", function (er, files) {
    files.forEach(File => {
        if (!File.startsWith("G_Items/")) return;
        NewFileName = File.substring("Encrypted/".length, File.length)

        const MD5Code = md5(NewFileName) + md5(NewFileName)

        console.log("Changing " + File + " to " + MD5Code.substring(0, NewFileName.length - 4) + ".efx")
        fs.renameSync('./' + File, "./Encrypted/" + MD5Code.substring(0, NewFileName.length - 4) + ".efx")

        const ReplacementObject = {
            From: File,
            To: "Encrypted/" + MD5Code.substring(0, NewFileName.length - 4) + ".efx"
        }
        ReplacementTable.push(ReplacementObject)
    })
})

var ChangeOptions = {
    files: null,
    from: [],
    to: [],
    encoding: "binary"
}

setTimeout(() => {

    ReplacementTable.forEach(ReplObj => {
        const FromRegex = /\//g;
        const regex = new RegExp(ReplObj.From.toLowerCase().replace(FromRegex, "\\\\"), 'g');

        ChangeOptions.from.push(regex)
        ChangeOptions.to.push(ReplObj.To.replace("/", "\\"))
        console.log(ReplObj.From.toLowerCase().replace(FromRegex, "\\") + " -> " + ReplObj.To)
    })
    glob("**/*.efx", function (er, files) {
        files.forEach(File => {
            if (!File.startsWith("Encrypted/")) return;


            //console.log("Changing this file: " + "./" + File)


            ChangeOptions.files = "./" + File
            console.log(ChangeOptions)
            replace(ChangeOptions)
                .then(results => {
                    console.log("replacement results:", results)
                })
                .catch(error => {
                    console.error("Error occurred with replacement:", error)
                })
        })
    })
}, 3000);



setTimeout(() => {
    console.log("Updating cabal.dec and item.dec with file changes...")
    if (!fs.existsSync("./cabal.dec")) console.warn("WARN: Could not find/load cabal.dec.")
    if (!fs.existsSync("./item.dec")) console.warn("WARN: Could not find/load item.dec.")

    ChangeOptions.files = "./cabal.dec"
    replace(ChangeOptions)
        .then(results => {
            console.log("replacement results:", results)
        })
        .catch(error => {
            console.error("Error occurred with replacement:", error)
        })

    ChangeOptions.files = "./item.dec"
    replace(ChangeOptions)
        .then(results => {
            console.log("replacement results:", results)
        })
        .catch(error => {
            console.error("Error occurred with replacement:", error)
        })
}, 5000);

setTimeout(() => {
    console.log("Complete")
}, 20000);