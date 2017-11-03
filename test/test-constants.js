// Required for test adding a feedback route

exports.SERVER_OK_STATUS = 200;
exports.SERVER_ERROR_STATUS = 500;
exports.SERVER_UNAUTHORIZED_STATUS = 401;

exports.MOCK_FEEDBACK = {
    "rating": "Awesome",
    "description": "Testing feedback",
    "email": "lanil.marasinghe@pearson.com",
    "createdAt": Date.now()
};

// An unauthorized user
exports.UNAUTHORIZED_USER = {
    "email": "asdas",
    "password": "sss"
};

// An authorized user
exports.AUTHORIZED_USER = {
    "email": "lanilmarasinghe@gmail.com",
    "password": "Pass1234"
};

exports.SEARCH_PROVIDER_NAME = 'alawala';

exports.SEARCH_CATEGORY_NAME = 'Electrician';

exports.VALID_PROFILE_ID = '59ef4f6215fd051a4c7cf96c';