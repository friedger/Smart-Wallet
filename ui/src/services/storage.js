import { gaiaStorage } from "../user-session";
const storagePutOptions = { encrypt: true };
const storageGetOptions = { decrypt: true };

export async function savetoGaia({ fileName, content }) {
    let result = { success: false, filePath: null };
    const fileContent = JSON.stringify(content);
    await gaiaStorage.putFile(fileName, fileContent, storagePutOptions)
        .then((res) => {
            result.success = Boolean(res);
            result.filePath = res;
        })
        .catch((err) => {
            result.success = Boolean(res);
            result.filePath = '';
            result.error = err.message;
            result.code = err.code;
        })
    return result;
}

export async function getFromGaia({ fileName }) {
    let result = { success: false, fileContent: null };
    await gaiaStorage.getFile(`${fileName}?ts=${Date.now()}`, storageGetOptions)
        .then((res) => {
            result.success = Boolean(res);
            result.fileContent = JSON.parse(res);
        })
        .catch((err) => {
            result.success = false;
            result.fileContent = '';
        })
    return result;
}

export async function deleteFromGaia({ fileName }) {
    const result = { success: false };
    await gaiaStorage.deleteFile(fileName)
        .then((res) => {
            result.success = true;
        })
        .catch((err) => {
            result.success = false;
        })
    return result;
}