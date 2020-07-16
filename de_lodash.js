const _ = require('lodash');

let tenants = [
    {
        // "_id" : ObjectId("5d1974980a0a923c2400002a"),
        "id" : "5d19749851801",
        "list_domain" : [ 
            {
                "name" : "d844e6d3.ngrok.io",
                "verify" : true,
                "is_main" : true,
                // "created" : ISODate("2019-07-01T02:48:56.000Z")
            }
        ]
    },
    {
        // "_id" : ObjectId("5e55f8db0a0a92e01500002a"),
        "id" : "5e55f8db24527",
        "list_domain" : [ 
            {
                "name" : "alishoppi.eggflow.com",
                "verify" : true,
                "is_main" : true,
                // "created" : ISODate("2020-02-26T04:49:31.000Z")
            }
        ]
    }
];

let giveaways = [
    
    {
        // "_id" : ObjectId("5e7201420a0a92100d00002a"),
        "title" : "Bac thuoc lan thu 2",
        "slug" : "bac-thuoc-lan-thu-2",
        "keywords" : "1,3,4,5,",
        "short_description" : "Bac thuoc lan thu 1 Short Description",
        "description" : "<p>Bac thuoc lan thu 1 tu 111 hoac 2</p>\n",
        "cover_images" : [ 
            "https://static.eggflow.com/5d19749851801/20190827113839.jpg"
        ],
        "popup_image" : "https://static.eggflow.com/5d19749851801/20190827113839.jpg",
        "popup_image_mobile" : "https://static.eggflow.com/5d19749851801/20191105085958.jpg",
        "enable_popup" : "true",
        // "start_date" : ISODate("2020-03-18T00:00:00.000Z"),
        // "end_date" : ISODate("2020-03-25T23:59:59.000Z"),
        "time_zone" : "America/New_York",
        "main_award_number" : "1",
        "main_award_is" : "123",
        "second_award_point" : "1",
        "second_award_is" : "12322222",
        "sharing" : {
            "facebook" : true,
            "facebook_messenger" : true,
            "twitter" : true,
            "youtube" : false,
            "youtube_link" : "",
            "instagram" : false,
            "instagram_link" : "",
            "linkedin" : true,
            "pinterest" : true,
            "email" : true
        },
        "template_type" : "modern",
        "primary_color" : "#5f5f5f",
        "secondary_color" : "#ec5778",
        "background_color" : "#a9bdb8",
        "active" : 1,
        "tenant_id" : "5d19749851801",
        // "created" : ISODate("2020-03-18T11:08:50.000Z"),
        // "updated" : ISODate("2020-03-18T11:08:50.000Z")
    },
    {
        // "_id" : ObjectId("5e7201420a0a92100d00002a"),
        "title" : "Bac thuoc lan thu 1",
        "slug" : "bac-thuoc-lan-thu-1",
        "keywords" : "1,3,4,5,",
        "short_description" : "Bac thuoc lan thu 1 Short Description",
        "description" : "<p>Bac thuoc lan thu 1 tu 111 hoac 2</p>\n",
        "cover_images" : [ 
            "https://static.eggflow.com/5d19749851801/20190827113839.jpg"
        ],
        "popup_image" : "https://static.eggflow.com/5d19749851801/20190827113839.jpg",
        "popup_image_mobile" : "https://static.eggflow.com/5d19749851801/20191105085958.jpg",
        "enable_popup" : "true",
        // "start_date" : ISODate("2020-03-18T00:00:00.000Z"),
        // "end_date" : ISODate("2020-03-25T23:59:59.000Z"),
        "time_zone" : "America/New_York",
        "main_award_number" : "1",
        "main_award_is" : "123",
        "second_award_point" : "1",
        "second_award_is" : "12322222",
        "sharing" : {
            "facebook" : true,
            "facebook_messenger" : true,
            "twitter" : true,
            "youtube" : false,
            "youtube_link" : "",
            "instagram" : false,
            "instagram_link" : "",
            "linkedin" : true,
            "pinterest" : true,
            "email" : true
        },
        "template_type" : "modern",
        "primary_color" : "#5f5f5f",
        "secondary_color" : "#ec5778",
        "background_color" : "#a9bdb8",
        "active" : 1,
        "tenant_id" : "5d19749851801",
        // "created" : ISODate("2020-03-18T11:08:50.000Z"),
        // "updated" : ISODate("2020-03-18T11:08:50.000Z")
    }
]

let final = _.map(giveaways, function(item){
    return _.assign(item, _.find(tenants, {'id': item.tenant_id}))
});

console.log(final)

