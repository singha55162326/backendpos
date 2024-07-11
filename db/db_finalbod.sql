-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 06, 2022 at 03:08 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_finalbod`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_cars`
--

CREATE TABLE `tb_cars` (
  `car_id` int(5) NOT NULL,
  `car_name` varchar(255) NOT NULL,
  `dimention` varchar(255) NOT NULL,
  `createdAt` date DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_cars`
--

INSERT INTO `tb_cars` (`car_id`, `car_name`, `dimention`, `createdAt`, `updatedAt`, `user_id`) VALUES
(1, 'ລົດ 10 ລໍ້ ISUZU', 'ລົດ 10 ລໍ້ ISUZU', '2022-08-06', '2022-08-06 16:20:43', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tb_categories`
--

CREATE TABLE `tb_categories` (
  `oil_type` int(5) NOT NULL,
  `oil_typename` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tb_customers`
--

CREATE TABLE `tb_customers` (
  `cus_id` int(5) NOT NULL,
  `cus_name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `contact` varchar(255) NOT NULL,
  `status` int(5) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_customers`
--

INSERT INTO `tb_customers` (`cus_id`, `cus_name`, `address`, `contact`, `status`, `phone`, `createdAt`, `updatedAt`, `user_id`) VALUES
(1, 'ລູກຄ້າ ພົງທະວີ', 'ນະຄອນຫລວງ', 'ພົງທະວີ', 1, '02062256582', '2022-08-06 16:33:54', '2022-08-06 16:50:18', 1),
(2, 'ບໍລິສັດ ນົກພະພົນ', 'ບ້ານ ທ່າເດື່ອ', 'ນາງ ນົກນະພົນ', 1, '02099855632', '2022-08-06 16:38:17', '2022-08-06 16:38:17', 1),
(3, 'Thvaithong', 'vintien', 'Nongbon', 0, '020987765', '2022-08-06 17:11:13', '2022-08-06 17:11:13', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tb_documents`
--

CREATE TABLE `tb_documents` (
  `id_documents` int(5) NOT NULL,
  `address` varchar(255) NOT NULL,
  `order_id` int(5) NOT NULL,
  `contact` varchar(255) NOT NULL,
  `traid` varchar(255) NOT NULL,
  `date` datetime NOT NULL,
  `company` varchar(255) NOT NULL,
  `dimention` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `service` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_documents`
--

INSERT INTO `tb_documents` (`id_documents`, `address`, `order_id`, `contact`, `traid`, `date`, `company`, `dimention`, `phone`, `service`, `price`, `createdAt`, `updatedAt`, `user_id`) VALUES
(1, 'lao', 1, '02097866323', '1', '2022-08-01 00:00:00', '1', 'test', '0209763212', 'Unitel', 59060, '2022-08-06', '2022-08-06 18:17:31', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tb_employees`
--

CREATE TABLE `tb_employees` (
  `employee_id` int(5) NOT NULL,
  `employeename` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_employees`
--

INSERT INTO `tb_employees` (`employee_id`, `employeename`, `address`, `position`, `phone`, `createdAt`, `updatedAt`, `user_id`) VALUES
(1, 'ທ້າວ ວົງພະຈັນ', 'ນະຄອນຫລວງ', 'ພະນັກງານ', '0209965587', '2022-08-06 16:23:19', '2022-08-06 16:23:19', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tb_import`
--

CREATE TABLE `tb_import` (
  `ImpID` int(11) NOT NULL,
  `Qty` int(11) NOT NULL,
  `Price` float NOT NULL,
  `ImpDate` varchar(50) NOT NULL,
  `Orders_id` int(11) NOT NULL,
  `supplier_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tb_import_detail`
--

CREATE TABLE `tb_import_detail` (
  `Import_Detail_ID` int(11) NOT NULL,
  `ImpID` int(11) NOT NULL,
  `Qty` int(11) NOT NULL,
  `Price` float NOT NULL,
  `oils_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tb_oils`
--

CREATE TABLE `tb_oils` (
  `oils_id` int(5) NOT NULL,
  `oil_name` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `qty` int(5) NOT NULL,
  `price` float NOT NULL,
  `createdAt` date DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_id` int(5) NOT NULL,
  `supplier_id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_oils`
--

INSERT INTO `tb_oils` (`oils_id`, `oil_name`, `status`, `qty`, `price`, `createdAt`, `updatedAt`, `user_id`, `supplier_id`) VALUES
(1, 'ແອດຊັງ ພິເສດ', '1', 1199, 20520, '2022-08-06', '2022-08-06 17:33:05', 1, 1),
(2, 'ແອດຊັງ ທຳມະດາ', '1', 1199, 19520, '2022-08-06', '2022-08-06 17:33:05', 1, 1),
(3, 'ກາຊວນ ທໍາມະດາ', '1', 1199, 19020, '2022-08-06', '2022-08-06 17:33:05', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tb_orderdetail`
--

CREATE TABLE `tb_orderdetail` (
  `Order_Detail_ID` int(11) NOT NULL,
  `Qty` int(11) NOT NULL,
  `Price` float NOT NULL,
  `oils_id` int(11) NOT NULL,
  `orders_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tb_orders`
--

CREATE TABLE `tb_orders` (
  `orders_id` int(5) NOT NULL,
  `service` varchar(255) NOT NULL,
  `total` float NOT NULL,
  `company` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `qty` int(11) NOT NULL,
  `createdAt` date DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_id` int(5) NOT NULL,
  `status_order` varchar(255) DEFAULT NULL,
  `supplier_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tb_sales`
--

CREATE TABLE `tb_sales` (
  `sales_id` int(5) NOT NULL,
  `qty` int(5) NOT NULL,
  `total` float NOT NULL,
  `status_sell` varchar(11) NOT NULL,
  `cus_id` int(5) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_sales`
--

INSERT INTO `tb_sales` (`sales_id`, `qty`, `total`, `status_sell`, `cus_id`, `createdAt`, `updatedAt`, `user_id`) VALUES
(1, 3, 59060, '1', 1, '2022-08-06', '2022-08-06 17:33:05', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tb_selldetail`
--

CREATE TABLE `tb_selldetail` (
  `Sell_Detail_ID` int(11) NOT NULL,
  `sales_id` int(11) NOT NULL,
  `Qty` int(11) NOT NULL,
  `Price` float NOT NULL,
  `oil_id` int(11) NOT NULL,
  `total` float NOT NULL,
  `cus_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_selldetail`
--

INSERT INTO `tb_selldetail` (`Sell_Detail_ID`, `sales_id`, `Qty`, `Price`, `oil_id`, `total`, `cus_id`, `user_id`) VALUES
(1, 1, 1, 20520, 1, 20520, 1, 1),
(2, 1, 1, 19520, 2, 19520, 1, 1),
(3, 1, 1, 19020, 3, 19020, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tb_suppliers`
--

CREATE TABLE `tb_suppliers` (
  `supplier_id` int(5) NOT NULL,
  `supplier_name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_suppliers`
--

INSERT INTO `tb_suppliers` (`supplier_id`, `supplier_name`, `createdAt`, `updatedAt`, `user_id`) VALUES
(1, 'ບໍລິສັດ ປຕທ ຂົນສົ່ງ', '2022-08-06 16:25:29', '2022-08-06 16:25:29', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tb_transports`
--

CREATE TABLE `tb_transports` (
  `transport_id` int(5) NOT NULL,
  `id_documents` int(5) NOT NULL,
  `dimention` varchar(50) NOT NULL,
  `order_id` int(5) NOT NULL,
  `oil_id` int(5) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `supplier_id` int(5) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `car_id` int(5) NOT NULL,
  `user_id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_transports`
--

INSERT INTO `tb_transports` (`transport_id`, `id_documents`, `dimention`, `order_id`, `oil_id`, `company`, `supplier_id`, `createdAt`, `updatedAt`, `car_id`, `user_id`) VALUES
(1, 1, 're', 1, 1, 'b-money', 1, '2022-08-06', '2022-08-06 18:56:27', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tb_users`
--

CREATE TABLE `tb_users` (
  `user_id` int(5) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `level` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `CreatedBy` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_users`
--

INSERT INTO `tb_users` (`user_id`, `username`, `password`, `role`, `level`, `createdAt`, `updatedAt`, `CreatedBy`) VALUES
(1, 'admin', '$2b$10$dhxB4JB11KKTCm4cCs62o./tF3DMol3MDID952WmznJBIDsQLUsqS', '1', '1', '2022-07-26 11:52:26', '2022-08-04 22:42:52', 0),
(2, 'emp', '$2b$10$LzzN3Z2DDoFG1ifrcsqaIOQlEraHizvr1zhmqJltAGTHnOe5gjaj6', '2', '2', '2022-08-05 16:21:58', '2022-08-05 16:21:58', 1);

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_document`
-- (See below for the actual view)
--
CREATE TABLE `v_document` (
`id_documents` int(5)
,`address` varchar(255)
,`orders_id` int(5)
,`employee_id` int(5)
,`employeename` varchar(255)
,`contact` varchar(255)
,`traid` varchar(255)
,`date` datetime
,`company` varchar(255)
,`dimention` varchar(255)
,`phone` varchar(255)
,`service` varchar(255)
,`price` float
,`createdat` date
,`updatedat` datetime
,`user_id` int(5)
,`username` varchar(255)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_icon_report`
-- (See below for the actual view)
--
CREATE TABLE `v_icon_report` (
`total` double
,`qty` decimal(32,0)
,`Name` varchar(18)
,`icon` varchar(20)
,`color` varchar(36)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_order`
-- (See below for the actual view)
--
CREATE TABLE `v_order` (
`orders_id` int(5)
,`service` varchar(255)
,`company` varchar(255)
,`date` varchar(255)
,`total` float
,`qty` int(11)
,`createdat` date
,`updatedat` datetime
,`supplier_id` int(11)
,`user_id` int(5)
,`username` varchar(255)
,`status_order` varchar(255)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_order_search`
-- (See below for the actual view)
--
CREATE TABLE `v_order_search` (
`orders_id` int(5)
,`oils_id` int(5)
,`oil_name` varchar(255)
,`qty` int(11)
,`price` float
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_report_import`
-- (See below for the actual view)
--
CREATE TABLE `v_report_import` (
`impid` int(11)
,`qty` int(11)
,`price` float
,`supplier_name` varchar(255)
,`oil_name` varchar(255)
,`username` varchar(255)
,`impdate` varchar(50)
,`total` double
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_report_oils`
-- (See below for the actual view)
--
CREATE TABLE `v_report_oils` (
`oils_id` int(5)
,`oil_name` varchar(255)
,`status` varchar(255)
,`qty` int(5)
,`price` float
,`createdAt` date
,`updatedAt` datetime
,`username` varchar(255)
,`supplier_name` varchar(255)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_report_order`
-- (See below for the actual view)
--
CREATE TABLE `v_report_order` (
`orders_id` int(5)
,`service` varchar(255)
,`company` varchar(255)
,`createdat` date
,`username` varchar(255)
,`supplier_name` varchar(255)
,`oil_name` varchar(255)
,`qty` int(11)
,`price` float
,`status_order` varchar(255)
,`total` double
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_report_sell`
-- (See below for the actual view)
--
CREATE TABLE `v_report_sell` (
`sales_id` int(5)
,`Qty` int(11)
,`Price` float
,`cus_name` varchar(255)
,`username` varchar(255)
,`oil_name` varchar(255)
,`createdAt` date
,`total` double
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_transport`
-- (See below for the actual view)
--
CREATE TABLE `v_transport` (
`transport_id` int(5)
,`id_documents` int(5)
,`address` varchar(255)
,`dimention` varchar(50)
,`orders_id` int(5)
,`service` varchar(255)
,`oils_id` int(5)
,`oil_name` varchar(255)
,`company` varchar(255)
,`supplier_id` int(5)
,`supplier_name` varchar(255)
,`createdat` date
,`updatedat` datetime
,`car_id` int(5)
,`car_name` varchar(255)
,`user_id` int(5)
,`username` varchar(255)
);

-- --------------------------------------------------------

--
-- Structure for view `v_document`
--
DROP TABLE IF EXISTS `v_document`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_document`  AS SELECT `td`.`id_documents` AS `id_documents`, `td`.`address` AS `address`, `tod`.`orders_id` AS `orders_id`, `te`.`employee_id` AS `employee_id`, `te`.`employeename` AS `employeename`, `td`.`contact` AS `contact`, `td`.`traid` AS `traid`, `td`.`date` AS `date`, `td`.`company` AS `company`, `td`.`dimention` AS `dimention`, `td`.`phone` AS `phone`, `td`.`service` AS `service`, `td`.`price` AS `price`, `td`.`createdAt` AS `createdat`, `td`.`updatedAt` AS `updatedat`, `tu`.`user_id` AS `user_id`, `tu`.`username` AS `username` FROM (((`tb_documents` `td` join `tb_orders` `tod`) join `tb_users` `tu`) join `tb_employees` `te`) WHERE `td`.`order_id` = `tod`.`orders_id` AND `td`.`user_id` = `tu`.`user_id` ;

-- --------------------------------------------------------

--
-- Structure for view `v_icon_report`
--
DROP TABLE IF EXISTS `v_icon_report`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_icon_report`  AS   (select sum(`tb_orders`.`total`) AS `total`,sum(`tb_orders`.`qty`) AS `qty`,'ສັ່ງຊື້ຈາກຜູ້ສະໜອງ' AS `Name`,'fas fa-cog' AS `icon`,'info-box-icon bg-info elevation-1' AS `color` from `tb_orders`) union (select sum(`tb_import`.`Price`) AS `Price`,sum(`tb_import`.`Qty`) AS `qty`,'ລາຍຈ່າຍ' AS `Name`,'fas fa-thumbs-up' AS `icon`,'info-box-icon bg-danger elevation-1' AS `color` from `tb_import`) union (select sum(`tb_sales`.`total`) AS `total`,sum(`tb_sales`.`qty`) AS `qty`,'ຂໍ້ມູນການຂາຍ' AS `Name`,'fas fa-shopping-cart' AS `icon`,'info-box-icon bg-success elevation-1' AS `color` from `tb_sales`) union (select sum(`tb_oils`.`price`) AS `Price`,sum(`tb_oils`.`qty`) AS `qty`,'ນໍ້າມັນຕົວຈິງ' AS `Name`,'fas fa-users' AS `icon`,'info-box-icon bg-warning elevation-1' AS `color` from `tb_oils`)  ;

-- --------------------------------------------------------

--
-- Structure for view `v_order`
--
DROP TABLE IF EXISTS `v_order`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_order`  AS SELECT `tod`.`orders_id` AS `orders_id`, `tod`.`service` AS `service`, `tod`.`company` AS `company`, `tod`.`date` AS `date`, `tod`.`total` AS `total`, `tod`.`qty` AS `qty`, `tod`.`createdAt` AS `createdat`, `tod`.`updatedAt` AS `updatedat`, `tod`.`supplier_id` AS `supplier_id`, `tu`.`user_id` AS `user_id`, `tu`.`username` AS `username`, `tod`.`status_order` AS `status_order` FROM (`tb_orders` `tod` join `tb_users` `tu`) WHERE `tod`.`user_id` = `tu`.`user_id` ;

-- --------------------------------------------------------

--
-- Structure for view `v_order_search`
--
DROP TABLE IF EXISTS `v_order_search`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_order_search`  AS SELECT `tod`.`orders_id` AS `orders_id`, `ts`.`oils_id` AS `oils_id`, `ts`.`oil_name` AS `oil_name`, `td`.`Qty` AS `qty`, `td`.`Price` AS `price` FROM ((`tb_orders` `tod` join `tb_orderdetail` `td`) join `tb_oils` `ts`) WHERE `tod`.`orders_id` = `td`.`orders_id` AND `td`.`oils_id` = `ts`.`oils_id` ;

-- --------------------------------------------------------

--
-- Structure for view `v_report_import`
--
DROP TABLE IF EXISTS `v_report_import`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_report_import`  AS SELECT `ti`.`ImpID` AS `impid`, `td`.`Qty` AS `qty`, `td`.`Price` AS `price`, `ts`.`supplier_name` AS `supplier_name`, `tos`.`oil_name` AS `oil_name`, `tu`.`username` AS `username`, `ti`.`ImpDate` AS `impdate`, `td`.`Qty`* `td`.`Price` AS `total` FROM ((((`tb_import` `ti` join `tb_import_detail` `td`) join `tb_suppliers` `ts`) join `tb_oils` `tos`) join `tb_users` `tu`) WHERE `ti`.`ImpID` = `td`.`ImpID` AND `ti`.`supplier_id` = `ts`.`supplier_id` AND `td`.`oils_id` = `tos`.`oils_id` AND `tu`.`user_id` = `td`.`user_id` ;

-- --------------------------------------------------------

--
-- Structure for view `v_report_oils`
--
DROP TABLE IF EXISTS `v_report_oils`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_report_oils`  AS SELECT `toi`.`oils_id` AS `oils_id`, `toi`.`oil_name` AS `oil_name`, `toi`.`status` AS `status`, `toi`.`qty` AS `qty`, `toi`.`price` AS `price`, `toi`.`createdAt` AS `createdAt`, `toi`.`updatedAt` AS `updatedAt`, `tu`.`username` AS `username`, `ts`.`supplier_name` AS `supplier_name` FROM ((`tb_oils` `toi` join `tb_users` `tu`) join `tb_suppliers` `ts`) WHERE `toi`.`user_id` = `tu`.`user_id` AND `toi`.`supplier_id` = `ts`.`supplier_id` ;

-- --------------------------------------------------------

--
-- Structure for view `v_report_order`
--
DROP TABLE IF EXISTS `v_report_order`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_report_order`  AS SELECT `tor`.`orders_id` AS `orders_id`, `tor`.`service` AS `service`, `tor`.`company` AS `company`, `tor`.`createdAt` AS `createdat`, `tu`.`username` AS `username`, `ts`.`supplier_name` AS `supplier_name`, `tos`.`oil_name` AS `oil_name`, `tod`.`Qty` AS `qty`, `tod`.`Price` AS `price`, `tor`.`status_order` AS `status_order`, `tod`.`Qty`* `tod`.`Price` AS `total` FROM ((((`tb_orders` `tor` join `tb_orderdetail` `tod`) join `tb_users` `tu`) join `tb_suppliers` `ts`) join `tb_oils` `tos`) WHERE `tor`.`orders_id` = `tod`.`orders_id` AND `tor`.`user_id` = `tu`.`user_id` AND `tor`.`supplier_id` = `ts`.`supplier_id` AND `tod`.`oils_id` = `tos`.`oils_id` ;

-- --------------------------------------------------------

--
-- Structure for view `v_report_sell`
--
DROP TABLE IF EXISTS `v_report_sell`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_report_sell`  AS SELECT `ts`.`sales_id` AS `sales_id`, `tsd`.`Qty` AS `Qty`, `tsd`.`Price` AS `Price`, `tc`.`cus_name` AS `cus_name`, `tu`.`username` AS `username`, `tos`.`oil_name` AS `oil_name`, `ts`.`createdAt` AS `createdAt`, `tsd`.`Qty`* `tsd`.`Price` AS `total` FROM ((((`tb_sales` `ts` join `tb_selldetail` `tsd`) join `tb_customers` `tc`) join `tb_users` `tu`) join `tb_oils` `tos`) WHERE `ts`.`sales_id` = `tsd`.`sales_id` AND `ts`.`cus_id` = `tc`.`cus_id` AND `ts`.`user_id` = `tu`.`user_id` AND `tsd`.`oil_id` = `tos`.`oils_id` ;

-- --------------------------------------------------------

--
-- Structure for view `v_transport`
--
DROP TABLE IF EXISTS `v_transport`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_transport`  AS SELECT `tp`.`transport_id` AS `transport_id`, `td`.`id_documents` AS `id_documents`, `td`.`address` AS `address`, `tp`.`dimention` AS `dimention`, `tod`.`orders_id` AS `orders_id`, `tod`.`service` AS `service`, `toi`.`oils_id` AS `oils_id`, `toi`.`oil_name` AS `oil_name`, `tp`.`company` AS `company`, `ts`.`supplier_id` AS `supplier_id`, `ts`.`supplier_name` AS `supplier_name`, `tp`.`createdAt` AS `createdat`, `tp`.`updatedAt` AS `updatedat`, `tc`.`car_id` AS `car_id`, `tc`.`car_name` AS `car_name`, `tu`.`user_id` AS `user_id`, `tu`.`username` AS `username` FROM ((((((`tb_transports` `tp` join `tb_documents` `td`) join `tb_orders` `tod`) join `tb_oils` `toi`) join `tb_suppliers` `ts`) join `tb_cars` `tc`) join `tb_users` `tu`) WHERE `tp`.`id_documents` = `td`.`id_documents` AND `tp`.`order_id` = `tod`.`orders_id` AND `tp`.`oil_id` = `toi`.`oils_id` AND `tp`.`supplier_id` = `ts`.`supplier_id` AND `tp`.`car_id` = `tc`.`car_id` AND `tp`.`user_id` = `tu`.`user_id` ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_cars`
--
ALTER TABLE `tb_cars`
  ADD PRIMARY KEY (`car_id`);

--
-- Indexes for table `tb_categories`
--
ALTER TABLE `tb_categories`
  ADD PRIMARY KEY (`oil_type`);

--
-- Indexes for table `tb_customers`
--
ALTER TABLE `tb_customers`
  ADD PRIMARY KEY (`cus_id`);

--
-- Indexes for table `tb_documents`
--
ALTER TABLE `tb_documents`
  ADD PRIMARY KEY (`id_documents`);

--
-- Indexes for table `tb_employees`
--
ALTER TABLE `tb_employees`
  ADD PRIMARY KEY (`employee_id`);

--
-- Indexes for table `tb_import`
--
ALTER TABLE `tb_import`
  ADD PRIMARY KEY (`ImpID`);

--
-- Indexes for table `tb_import_detail`
--
ALTER TABLE `tb_import_detail`
  ADD PRIMARY KEY (`Import_Detail_ID`);

--
-- Indexes for table `tb_oils`
--
ALTER TABLE `tb_oils`
  ADD PRIMARY KEY (`oils_id`);

--
-- Indexes for table `tb_orderdetail`
--
ALTER TABLE `tb_orderdetail`
  ADD PRIMARY KEY (`Order_Detail_ID`);

--
-- Indexes for table `tb_orders`
--
ALTER TABLE `tb_orders`
  ADD PRIMARY KEY (`orders_id`) USING BTREE;

--
-- Indexes for table `tb_sales`
--
ALTER TABLE `tb_sales`
  ADD PRIMARY KEY (`sales_id`);

--
-- Indexes for table `tb_selldetail`
--
ALTER TABLE `tb_selldetail`
  ADD PRIMARY KEY (`Sell_Detail_ID`);

--
-- Indexes for table `tb_suppliers`
--
ALTER TABLE `tb_suppliers`
  ADD PRIMARY KEY (`supplier_id`);

--
-- Indexes for table `tb_transports`
--
ALTER TABLE `tb_transports`
  ADD PRIMARY KEY (`transport_id`);

--
-- Indexes for table `tb_users`
--
ALTER TABLE `tb_users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_cars`
--
ALTER TABLE `tb_cars`
  MODIFY `car_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tb_categories`
--
ALTER TABLE `tb_categories`
  MODIFY `oil_type` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tb_customers`
--
ALTER TABLE `tb_customers`
  MODIFY `cus_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tb_documents`
--
ALTER TABLE `tb_documents`
  MODIFY `id_documents` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tb_employees`
--
ALTER TABLE `tb_employees`
  MODIFY `employee_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tb_import`
--
ALTER TABLE `tb_import`
  MODIFY `ImpID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tb_import_detail`
--
ALTER TABLE `tb_import_detail`
  MODIFY `Import_Detail_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tb_oils`
--
ALTER TABLE `tb_oils`
  MODIFY `oils_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tb_orderdetail`
--
ALTER TABLE `tb_orderdetail`
  MODIFY `Order_Detail_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tb_orders`
--
ALTER TABLE `tb_orders`
  MODIFY `orders_id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tb_sales`
--
ALTER TABLE `tb_sales`
  MODIFY `sales_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tb_selldetail`
--
ALTER TABLE `tb_selldetail`
  MODIFY `Sell_Detail_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tb_suppliers`
--
ALTER TABLE `tb_suppliers`
  MODIFY `supplier_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tb_transports`
--
ALTER TABLE `tb_transports`
  MODIFY `transport_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tb_users`
--
ALTER TABLE `tb_users`
  MODIFY `user_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
