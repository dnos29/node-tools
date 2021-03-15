const createCsvWriter = require('csv-writer').createObjectCsvWriter;

let orders_expired = [
    {
      "name": "#35107 Nguyễn Thị Hương Giang (LCM00021)",
      "link": "https://lotuscommunity.org.vn/wp-admin/post.php?post=35107&action=edit",
      "due_date": "21 Feb, 2021"
    },
    {
      "name": "#35106 Phạm Hùng Dương (LCM00096)",
      "link": "https://lotuscommunity.org.vn/wp-admin/post.php?post=35106&action=edit",
      "due_date": "30 Jan, 2021"
    },
    {
      "name": "#35103 Nguyễn Thị Phương Hoa (LCM00097)",
      "link": "https://lotuscommunity.org.vn/wp-admin/post.php?post=35103&action=edit",
      "due_date": "30 Jan, 2021"
    },
    {
      "name": "#35084 Lê Thị Hồng Thanh (LCM00031)",
      "link": "https://lotuscommunity.org.vn/wp-admin/post.php?post=35084&action=edit",
      "due_date": "30 Jan, 2021"
    },
    {
      "name": "#35080 Ngô Mai Hương (LCM00068)",
      "link": "https://lotuscommunity.org.vn/wp-admin/post.php?post=35080&action=edit",
      "due_date": "23 Jan, 2021"
    },
    {
      "name": "#35078 Lê Thu Phương Quỳnh (LCM00005)",
      "link": "https://lotuscommunity.org.vn/wp-admin/post.php?post=35078&action=edit",
      "due_date": "23 Jan, 2021"
    },
    {
      "name": "#35021 Nguyễn Đông Thục (LCM00086)",
      "link": "https://lotuscommunity.org.vn/wp-admin/post.php?post=35021&action=edit",
      "due_date": "16 Jan, 2021"
    },
    {
      "name": "#34990 Trang",
      "link": "https://lotuscommunity.org.vn/wp-admin/post.php?post=34990&action=edit",
      "due_date": "(no value)"
    },
    {
      "name": "#34971 Vũ Thủy (LCM00014G)",
      "link": "https://lotuscommunity.org.vn/wp-admin/post.php?post=34971&action=edit",
      "due_date": "7 Feb, 2021"
    },
    {
      "name": "#34968 Bùi Thị Phương Mai (LCM00094)",
      "link": "https://lotuscommunity.org.vn/wp-admin/post.php?post=34968&action=edit",
      "due_date": "9 Jan, 2021"
    },
    {
      "name": "#34967 Nguyễn Thị Thúy Ngọc (LCM00065)",
      "link": "https://lotuscommunity.org.vn/wp-admin/post.php?post=34967&action=edit",
      "due_date": "9 Jan, 2021"
    },
    {
      "name": "#34961 Nguyễn Thị Lệ Dung (LCM00010)",
      "link": "https://lotuscommunity.org.vn/wp-admin/post.php?post=34961&action=edit",
      "due_date": "9 Jan, 2021"
    },
    {
      "name": "#34716 Đinh Thị Thanh Hòa (LCM00039)",
      "link": "https://lotuscommunity.org.vn/wp-admin/post.php?post=34716&action=edit",
      "due_date": "25 Dec, 2020"
    },
    {
      "name": "#34676 Nguyễn Trung Kiên (LCM00053)",
      "link": "https://lotuscommunity.org.vn/wp-admin/post.php?post=34676&action=edit",
      "due_date": "25 Dec, 2020"
    }
  ]

const csvWriter = createCsvWriter({
    path: `./expired/012021-${Date.now()}.csv`,
    header: [
      { id: 'name', title: 'Mã đơn + mã thành viên' },
      { id: 'link":', title: 'Link' },
      { id: 'due_date', title: 'Ngày đến hạn trả sách' },
    ]
});
csvWriter.writeRecords(orders_expired).then(() => {
    console.log("...Done");
  })
//   jQuery("#the-list > tr").each(function(){
//     a.push({
//             name: jQuery(this).find("a.order-view").text(),
//             link: jQuery(this).find("a.order-view").attr('href'),
//             due_date: jQuery(this).find("td.column-due_date").text()
//         })
//     })  