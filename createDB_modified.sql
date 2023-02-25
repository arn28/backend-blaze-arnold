-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema saleproductsdb_modified
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema saleproductsdb_modified
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `saleproductsdb_modified` DEFAULT CHARACTER SET utf8mb4 ;
USE `saleproductsdb_modified` ;

-- -----------------------------------------------------
-- Table `saleproductsdb_modified`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `saleproductsdb_modified`.`categories` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `categoryName` VARCHAR(45) NOT NULL,
  `photoType` VARCHAR(45) NOT NULL,
  `categoryParent_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_categories_categories_idx` (`categoryParent_id`),
  CONSTRAINT `fk_categories_categories`
    FOREIGN KEY (`categoryParent_id`)
    REFERENCES `saleproductsdb_modified`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 32
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `saleproductsdb_modified`.`discounts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `saleproductsdb_modified`.`discounts` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `discountType` VARCHAR(45) NOT NULL,
  `discountAmount` INT(11) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `saleproductsdb_modified`.`parentproduct`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `saleproductsdb_modified`.`parentproduct` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `parentProductName` VARCHAR(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `parentProductName_UNIQUE` (`parentProductName`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `saleproductsdb_modified`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `saleproductsdb_modified`.`products` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `productName` VARCHAR(100) NOT NULL,
  `weight` FLOAT NOT NULL,
  `cannabisWeight` FLOAT NOT NULL,
  `price` INT(11) NOT NULL,
  `fee` INT(11) NOT NULL,
  `sku` VARCHAR(45) NULL DEFAULT NULL,
  `imageURL` VARCHAR(255) NULL DEFAULT NULL,
  `barcode` VARCHAR(100) NULL DEFAULT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `cannabisVolume` FLOAT NULL DEFAULT NULL,
  `isActive` TINYINT(4) NULL DEFAULT NULL,
  `createDate` DATETIME NULL DEFAULT NULL,
  `updateDate` DATETIME NULL DEFAULT NULL,
  `fullProductName` VARCHAR(100) NULL DEFAULT NULL,
  `productSlug` VARCHAR(100) NULL DEFAULT NULL,
  `salesPrice` INT(11) NOT NULL,
  `inventory` INT(11) NOT NULL,
  `discountAmount` INT(11) NOT NULL,
  `productscol` VARCHAR(45) NULL DEFAULT NULL,
  `categories_id` INT(11) NULL DEFAULT NULL,
  `supplier_id` INT(11) NULL DEFAULT NULL,
  `tenant_id` INT(11) NULL DEFAULT NULL,
  `retailer_id` INT(11) NULL DEFAULT NULL,
  `discount_id` INT(11) NULL DEFAULT NULL,
  `parentProduct_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`productName`),
  INDEX `fk_products_categories1_idx` (`categories_id`),
  INDEX `fk_products_suppliers1_idx` (`supplier_id`) ,
  INDEX `fk_products_tenants1_idx` (`tenant_id`),
  INDEX `fk_products_retailers1_idx` (`retailer_id`),
  INDEX `fk_products_discounts1_idx` (`discount_id`),
  INDEX `fk_products_parentProducts1_idx` (`parentProduct_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 37
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `saleproductsdb_modified`.`sale`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `saleproductsdb_modified`.`sale` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `customerName` VARCHAR(45) NOT NULL,
  `saleDate` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `saleproductsdb_modified`.`product_has_sale`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `saleproductsdb_modified`.`product_has_sale` (
  `product_id` INT(11) NOT NULL,
  `sale_id` INT(11) NOT NULL,
  `amount` INT(11) NOT NULL,
  `salesPrice` INT(11) NOT NULL,
  `discountAmount` INT(11) NOT NULL,
  PRIMARY KEY (`product_id`, `sale_id`),
  INDEX `fk_products_has_sales_sales1_idx` (`sale_id`),
  INDEX `fk_products_has_sales_products1_idx` (`product_id`),
  CONSTRAINT `fk_products_has_sales_products1`
    FOREIGN KEY (`product_id`)
    REFERENCES `saleproductsdb_modified`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_has_sales_sales1`
    FOREIGN KEY (`sale_id`)
    REFERENCES `saleproductsdb_modified`.`sale` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `saleproductsdb_modified`.`retailer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `saleproductsdb_modified`.`retailer` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `retailerName` VARCHAR(45) NOT NULL,
  `address` VARCHAR(100) NULL DEFAULT NULL,
  `email` VARCHAR(100) NOT NULL,
  `phone` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `saleproductsdb_modified`.`suppliers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `saleproductsdb_modified`.`suppliers` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `supplierName` VARCHAR(45) NOT NULL,
  `address` VARCHAR(100) NULL DEFAULT NULL,
  `email` VARCHAR(100) NOT NULL,
  `phone` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 34
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `saleproductsdb_modified`.`tenants`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `saleproductsdb_modified`.`tenants` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `tenantName` VARCHAR(45) NULL DEFAULT NULL,
  `address` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 34
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
