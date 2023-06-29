var mysql = require("mysql")

//연결한 db 정보입력
const connection = mysql.createConnection({
    host: 'database-1.cv7utmpmdsdz.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    password: '11111111',
    database: 'miniproject',
    port: '3306',
});

//RDS에 접속합니다.
connection.connect(function (err) {
    if (err) {
        throw err; //접속에 실패하면 에러를 throw합니다.
    } else {
        // connection.query("create database miniproject", function (err, rows, fields) {
        //     console.log(rows); // 결과를 출력합니다!

        // });

        // connection.query("show databases", function (err, rows, fields) {
        //     console.log(rows); // 결과를 출력합니다!
        // });

        // connection.query("use miniproject", function (err, rows, fields) {
        //     console.log(rows); // 결과를 출력합니다!
        // });

        //create쿼리문 사용
        // connection.query('create table recycle (num INT NOT NULL PRIMARY KEY, item VARCHAR(10) NOT NULL, category VARCHAR(20) NOT NULL, method VARCHAR(300) NULL, notice VARCHAR(300) NULL);', (error, results, fields) => {
        //     if (error) throw error;
        //     console.log('table 생성 완료!');
        // });

        //insert 값 입력
        // connection.query('insert into recycle (num, item, category, method, notice) values (1,\'귤 껍질\',\'음식물 쓰레기\',\'<음식물 쓰레기>배출방법을 준수하여 배출합니다.\',\'가축의 사료로 사용할 수 있으면 음식물 쓰레기입니다.\');', (error, results, fields) => {
        //     if (error) throw error;
        //     console.log('데이터 입력 성공!');
        // })


        connection.query('select * from recycle', (error, results, fields) => {
            if (error) throw error;
            console.log(results); // 결과를 출력합니다.
        });


        console.log("연결완료");
    }
});