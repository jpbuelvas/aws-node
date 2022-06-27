const { DynamoDB } = require('aws-sdk')
const {v4} = require('uuid')
const addUser = async(event) => {
    const dynamoDb = new DynamoDB.DocumentClient()
    const {description,image_url,twitter_user_name,title} = JSON.parse(event.body);
    const createdAt = new Date();
    const id = v4();
    const newUser = {
        id,
        twitter_user_name,
        title,
        description,
        image_url,
        createdAt
    }
    await dynamoDb.put({
        TableName: 'UserTable',
        Item: newUser
    }).promise()
    return{
        status: 200,
       body: JSON.stringify(newUser) 
    }

}

module.exports ={
    addUser
}