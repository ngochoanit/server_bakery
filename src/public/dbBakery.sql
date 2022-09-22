create database dbbakery;


use dbbakery;


-- create table tblBanner(
--     id INT NOT NULL AUTO_INCREMENT,
-- 	image LONGTEXT NOT NULL,
-- 	link VARCHAR(500) CHARSET utf8,
--     title VARCHAR(255) CHARSET utf8,
--     description VARCHAR(255) CHARSET utf8,
--     status INT NOT NULL DEFAULT 0,
--     created_At DATETIME DEFAULT CURRENT_TIMESTAMP,
--     updated_At DATETIME DEFAULT CURRENT_TIMESTAMP,
--     CONSTRAINT pk_tblBanner PRIMARY KEY(id)
-- );

create table tblFeedback(
    -- id INT NOT NULL AUTO_INCREMENT,
    -- email VARCHAR(255) CHARSET utf8 NOT NULL,
    -- userName VARCHAR(255) CHARSET utf8 NOT NULL,
    -- phone VARCHAR(255) CHARSET utf8 NOT NULL,
    -- message VARCHAR(500) CHARSET utf8 NOT NULL,
    -- status INT NOT NULL DEFAULT 0,
    -- createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    -- updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    -- CONSTRAINT pk_tblFeedback PRIMARY KEY(id)
);

create table tblUser(
    -- id INT NOT NULL AUTO_INCREMENT,
    -- email VARCHAR(255) CHARSET utf8 NOT NULL,
    -- password VARCHAR(255) CHARSET utf8 NOT NULL,
    -- lastName VARCHAR(255) CHARSET utf8 NOT NULL,
    -- firstName VARCHAR(255) CHARSET utf8 NOT NULL,
    -- address VARCHAR(500) CHARSET utf8 NOT NULL,
    -- phone VARCHAR(255) CHARSET utf8 NOT NULL,
    -- role VARCHAR(50) CHARSET utf8 NOT NULL,
    -- status INT NOT NULL DEFAULT 0,
    -- createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    -- updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    -- CONSTRAINT pk_tblUser PRIMARY KEY(id)
);

create table tblCategory(
    -- id INT NOT NULL AUTO_INCREMENT,
    -- name VARCHAR(255) CHARSET utf8 NOT NULL,
    -- image LONGTEXT NULL,
    -- description VARCHAR(500) CHARSET utf8 NULL,
    -- status INT NOT NULL DEFAULT 0,
    -- createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    -- updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    -- CONSTRAINT pk_tblCategory PRIMARY KEY(id)
);

create table tblProduct(
    -- id INT NOT NULL AUTO_INCREMENT,
    -- categoryId INT NOT NULL,
    -- name VARCHAR(255) CHARSET utf8 NOT NULL,
    -- description VARCHAR(500) CHARSET utf8 NULL,
    -- price INT NOT NULL DEFAULT 0,
    -- promotion  INT,
    -- unit  VARCHAR(255) CHARSET utf8 NOT NULL,
    -- status INT NOT NULL DEFAULT 0,
    -- createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    -- updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    -- CONSTRAINT pk_tblProduct PRIMARY KEY(id)
);

create table tblImage(
    -- id INT NOT NULL AUTO_INCREMENT,
    -- productId INT NOT NULL,
    -- dataImage LONGTEXT NOT NULL,
    -- createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    -- updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    -- CONSTRAINT pk_tblImage PRIMARY KEY(id)
);

create table tblOrder(
    -- id INT NOT NULL AUTO_INCREMENT,
    -- name VARCHAR(255) CHARSET utf8 NOT NULL,
    -- email VARCHAR(255) CHARSET utf8 NULL,
    -- phone VARCHAR(50) CHARSET utf8 NOT NULL,
    -- address VARCHAR(500) CHARSET utf8 NOT NULL,
    -- message VARCHAR(500) CHARSET utf8 NOT NULL,
    -- status INT NOT NULL DEFAULT 0,
    -- createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    -- updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    -- CONSTRAINT pk_tblOrder PRIMARY KEY(id)
);

create table tblOrderDetail(
    -- id INT NOT NULL AUTO_INCREMENT,
    -- orderID INT NOT NULL,
    -- productId INT NOT NULL,
    -- price INT NOT NULL,
    -- quantity INT NOT NULL,
    -- promotion INT NOT NULL,
    -- createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    -- updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    -- CONSTRAINT pk_tblOrderDetail PRIMARY KEY(id)
);

create table tblNews(
    id INT NOT NULL AUTO_INCREMENT,
    thumbnail VARCHAR(500) CHARSET utf8 NOT NULL,
    title VARCHAR(500) CHARSET utf8 NOT NULL,
    description VARCHAR(500) CHARSET utf8 NOT NULL,
    content MEDIUMTEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_tblNews PRIMARY KEY(id)
);

ALTER TABLE tblProduct 
ADD
	CONSTRAINT fk_tblProduct_tblCategory
	FOREIGN KEY (categoryId) REFERENCES tblCategory(id);

ALTER TABLE tblImage
ADD
	CONSTRAINT fk_tblImage_tblProduct
	FOREIGN KEY (productId) REFERENCES tblProduct(id);

ALTER TABLE tblOrderDetail
ADD
	CONSTRAINT fk_tblOrderDetail_tblOrder
	FOREIGN KEY (orderId) REFERENCES tblOrder(id);

ALTER TABLE tblOrderDetail
ADD
	CONSTRAINT fk_tblOrderDetail_tblProduct
	FOREIGN KEY (productId) REFERENCES tblProduct(id);
