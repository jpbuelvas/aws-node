const { DynamoDB } = require('aws-sdk')

const getUsers = async(event) => {
    try{
        const dynamoDb = new DynamoDB.DocumentClient()
        const result = await dynamoDb.scan({
            TableName: "UserTable",
        }).promise();
        const users = result.Items;
        console.log(users);
        return{
            status: 200,
            body: {
                users
            }
        }
    }catch(e){
        //throw new Error(e);
        console.log(e)
    }
    
}

module.exports = {
    getUsers
}