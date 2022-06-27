const { DynamoDB } = require('aws-sdk')


const updateUser = async(event) => {
    const dynamoDb = new DynamoDB.DocumentClient()
    const {id} = event.pathParameters
    const {description,image_url,twitter_user_name,title} = JSON.parse(event.body);
    await dynamoDb.update({
        TableName: "UserTable",
        Key : {id},
        ExpressionAttributeValues: {
            ':description': description,
            ':image_url': image_url,
            ':twitter_user_name': twitter_user_name,
            ':title':title,
        },
        UpdateExpression:
            'SET description = :description, image_url = :image_url, twitter_user_name = :twitter_user_name, title = :title',
        ReturnValues: 'ALL_NEW'
    }).promise()
    return {
        status:200,
        body : JSON.stringify('Update user with id')

    }
}
module.exports = {
    updateUser
}