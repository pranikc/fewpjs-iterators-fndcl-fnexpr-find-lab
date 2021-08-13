function superbowlWin(record){
    if (record.find(each => each["result"] === "W")) {
        const getRecord = record.find(each => each["result"] === "W")
        return getRecord["year"]
    }
    else {
        return undefined
    }
}
