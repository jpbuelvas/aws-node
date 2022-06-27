const { DynamoDB } = require('aws-sdk')
const deleteUser = async(event) => {
    const dynamoDb = new DynamoDB.DocumentClient();
    const {id} = event.pathParameters;
    await dynamoDb
    .delete({
        TableName: "UserTable",
        Key : {
            id
        },
    }).promise();
    return {
        status: 200,
        body: {
            message: "User Delete Success",
        },
        
    }
}

module.exports = {
    deleteUser
}