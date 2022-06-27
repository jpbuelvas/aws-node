const { DynamoDB } = require('aws-sdk')
const getUser = async(event) => {
    const dynamoDb = new DynamoDB.DocumentClient();
    const {id} = event.pathParameters
    const result = await dynamoDb.get({
        TableName: "UserTable",
        Key : {
            id,
        },
    }).promise()
    const user = result.Item;
    return {
        status: "200",
        body: user
    }
}   

module.exports= {
    getUser
}