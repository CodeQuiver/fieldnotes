const buildRecord = (personName, noteText, timeStamp, userName) => {
    let record = {
        personName,
        noteText,
        timeStamp,
        userName,
    }

  return record;
}

export default buildRecord;