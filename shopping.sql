-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 15, 2022 at 12:51 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shopping`
--

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

CREATE TABLE `banners` (
  `id` int(11) NOT NULL,
  `page` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `url` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `order_index` int(5) NOT NULL,
  `active` enum('Y','N') COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `banners`
--

INSERT INTO `banners` (`id`, `page`, `url`, `order_index`, `active`, `user_id`, `created_at`) VALUES
(1, '1', 'lib/themes/images/carousel/banner-1.jpg', 1, 'Y', 1, '2022-07-16 17:09:31'),
(2, '1', 'lib/themes/images/carousel/banner-2.jpg', 2, 'Y', 1, '2022-07-16 17:09:31');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `active` enum('Y','N') COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `active`) VALUES
(1, 'Quần Áo Nam', 'Y'),
(2, 'Quần Áo Nữ', 'Y'),
(3, 'Quần Áo Trẻ Em', 'Y'),
(4, 'Phụ Kiện', 'Y');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `title` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `desciption` text COLLATE utf8_unicode_ci NOT NULL,
  `image_url` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `active` enum('Y','N') COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `event_products`
--

CREATE TABLE `event_products` (
  `id` int(11) NOT NULL,
  `percent` float NOT NULL,
  `product_id` int(11) NOT NULL,
  `event_id` int(11) NOT NULL,
  `active` enum('Y','N') COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
  `id` int(11) NOT NULL,
  `total_price` int(11) NOT NULL,
  `customer_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `customer_phone` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `customer_address` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `note` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `voucher_detail_id` int(11) NOT NULL,
  `discount` int(11) NOT NULL,
  `default_price` int(11) NOT NULL,
  `status` enum('new','confirm','done') COLLATE utf8_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `confirm_id` int(11) NOT NULL,
  `confirm_time` datetime NOT NULL,
  `done_id` int(11) NOT NULL,
  `done_time` datetime NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `invoices`
--

INSERT INTO `invoices` (`id`, `total_price`, `customer_name`, `customer_phone`, `customer_address`, `user_id`, `note`, `voucher_detail_id`, `discount`, `default_price`, `status`, `date`, `confirm_id`, `confirm_time`, `done_id`, `done_time`, `created_at`) VALUES
(1, 90, 'Khách Hàng 1', '0123456789', 'Đà nẵng', 1, 'Không có gì', 1, 10, 100, 'done', '2022-01-20', 1, '2022-01-20 21:13:10', 1, '2022-01-20 21:13:10', '2022-07-20 21:13:01'),
(2, 180, 'Khách Hàng 2', '0123456789', 'HCM', 1, 'Không có gì', 1, 10, 200, 'done', '2022-01-20', 1, '2022-01-20 21:13:10', 1, '2022-01-20 21:13:10', '2022-07-20 21:13:01'),
(3, 270, 'Khách Hàng 3', '0123456789', 'HNội', 1, 'Không có gì', 1, 10, 300, 'done', '2022-01-20', 1, '2022-01-20 21:13:10', 1, '2022-01-20 21:13:10', '2022-07-20 21:13:01'),
(4, 347, 'Nguyễn Xuân Ý', '0767156078', 'Đà Nẵng', 0, '[value-6]', 0, 0, 0, '', '0000-00-00', 0, '0000-00-00 00:00:00', 0, '0000-00-00 00:00:00', '2022-08-03 21:48:29'),
(71, 67, '123', '213', '123', 0, '', 0, 0, 67, 'new', '2022-08-13', 0, '0000-00-00 00:00:00', 0, '0000-00-00 00:00:00', '2022-08-13 16:10:26'),
(72, 0, '123123', '', '', 0, '', 0, 0, 0, 'new', '2022-08-13', 0, '0000-00-00 00:00:00', 0, '0000-00-00 00:00:00', '2022-08-13 16:16:17'),
(73, 107, '123', '123', '123', 0, '', 0, 0, 107, 'new', '2022-08-13', 0, '0000-00-00 00:00:00', 0, '0000-00-00 00:00:00', '2022-08-13 16:25:19');

-- --------------------------------------------------------

--
-- Table structure for table `invoice_details`
--

CREATE TABLE `invoice_details` (
  `id` int(11) NOT NULL,
  `invoice_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `invoice_details`
--

INSERT INTO `invoice_details` (`id`, `invoice_id`, `product_id`, `price`, `quantity`, `created_at`) VALUES
(1, 1, 2, 200, 5, '2022-07-23 11:47:37'),
(2, 1, 3, 100, 6, '2022-07-23 11:47:37'),
(3, 1, 1, 50, 2, '2022-07-23 11:47:37'),
(4, 2, 3, 10, 10, '2022-07-23 11:47:37'),
(5, 3, 1, 50, 12, '2022-07-23 11:47:37'),
(6, 3, 2, 50, 15, '2022-07-23 11:47:37'),
(7, 2, 3, 50, 7, '2022-07-23 11:47:37'),
(8, 36, 0, 31, 3, '2022-08-04 20:09:33'),
(9, 36, 0, 35, 3, '2022-08-04 20:09:33'),
(10, 36, 0, 62, 2, '2022-08-04 20:09:33'),
(73, 71, 0, 31, 1, '2022-08-13 16:10:26'),
(74, 71, 0, 36, 1, '2022-08-13 16:10:26'),
(75, 73, 0, 31, 1, '2022-08-13 16:25:19'),
(76, 73, 0, 36, 1, '2022-08-13 16:25:19'),
(77, 73, 0, 40, 1, '2022-08-13 16:25:19');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `price` decimal(7,2) NOT NULL,
  `category_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `active` enum('Y','N') COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `category_id`, `user_id`, `active`, `description`, `created_at`) VALUES
(2, 'Áo Nam', '31.25', 1, 1, 'Y', 'Áo nam', '2022-07-18 21:44:07'),
(3, 'Áo Nữ', '35.75', 2, 1, 'Y', 'Áo nữ', '2022-07-18 21:44:07'),
(4, 'Váy Nữ', '61.90', 2, 1, 'Y', 'Váy Nữ', '2022-07-18 21:44:07'),
(5, 'Đồ Trẻ Em', '40.15', 3, 1, 'Y', 'Đầm Trẻ Em', '2022-07-18 21:44:07'),
(6, 'Đồ Trẻ Em', '29.35', 3, 1, 'Y', 'Đồ Bộ', '2022-07-18 21:44:07'),
(7, 'Phụ kiện', '22.10', 4, 1, 'Y', 'Nón Túi', '2022-07-18 21:44:07'),
(8, 'Phụ kiện', '62.00', 4, 1, 'Y', 'Vali', '2022-07-18 21:44:07'),
(9, 'Quần Nam', '25.65', 1, 1, 'Y', 'Quần đùi', '2022-07-19 11:36:42'),
(10, 'Quần Nam', '35.35', 1, 1, 'Y', 'Quần dài', '2022-07-19 11:36:42'),
(11, 'Quần Nam', '55.45', 1, 1, 'Y', 'Quần jean', '2022-07-19 11:36:42'),
(12, 'Áo Nam', '115.75', 1, 1, 'Y', 'Áo khoác', '2022-07-19 11:36:42'),
(13, 'Áo Nam', '45.95', 1, 1, 'Y', 'Áo thun', '2022-07-19 11:36:42'),
(14, 'Áo Nam', '35.15', 1, 1, 'Y', 'Áo sơmi', '2022-07-19 11:36:42'),
(15, 'Quần Nữ', '23.35', 2, 1, 'Y', 'Váy dài', '2022-07-19 11:36:42'),
(16, 'Quần Nữ', '33.85', 2, 1, 'Y', 'Váy ngắn', '2022-07-19 11:36:42'),
(17, 'Quần Nữ', '28.30', 2, 1, 'Y', 'Đầm', '2022-07-19 11:36:42'),
(18, 'Áo Nữ', '123.35', 2, 1, 'Y', 'Áo ngắn tay', '2022-07-19 11:36:42'),
(19, 'Áo Nữ', '223.35', 2, 1, 'Y', 'Áo dài tay', '2022-07-19 11:36:42'),
(20, 'Áo Nữ', '233.45', 2, 1, 'Y', 'Áo thun', '2022-07-19 11:36:42'),
(21, 'Quần áo trẻ em', '122.20', 3, 1, 'Y', 'Áo dài', '2022-07-19 11:36:42'),
(22, 'Quần áo trẻ em', '152.95', 3, 1, 'Y', 'Áo ba lỗ', '2022-07-19 11:36:42'),
(23, 'Quần áo trẻ em', '322.90', 3, 1, 'Y', 'Áo khoác', '2022-07-19 11:36:42'),
(24, 'Quần áo trẻ em', '422.40', 3, 1, 'Y', 'Quần bò', '2022-07-19 11:36:42'),
(25, 'Quần áo trẻ em', '22.30', 3, 1, 'Y', 'Quần dài', '2022-07-19 11:36:42'),
(26, 'Quần áo trẻ em', '822.25', 3, 1, 'Y', 'Quần short lửng', '2022-07-19 11:36:42'),
(27, 'Phụ kiện', '322.25', 4, 1, 'Y', 'Phụ kiện', '2022-07-19 11:36:42'),
(28, 'Phụ kiện', '322.25', 4, 1, 'Y', 'Phụ kiện', '2022-07-19 11:36:42'),
(29, 'Phụ kiện', '322.25', 4, 1, 'Y', 'Phụ kiện', '2022-07-19 11:36:42'),
(30, 'Phụ kiện', '322.25', 4, 1, 'Y', 'Phụ kiện', '2022-07-19 11:36:42'),
(31, 'Phụ kiện', '322.25', 4, 1, 'Y', 'Phụ kiện', '2022-07-19 11:36:42'),
(32, 'Phụ kiện', '322.25', 4, 1, 'Y', 'Phụ kiện', '2022-07-19 11:36:42');

-- --------------------------------------------------------

--
-- Table structure for table `product_images`
--

CREATE TABLE `product_images` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `url` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `product_images`
--

INSERT INTO `product_images` (`id`, `product_id`, `url`, `created_at`) VALUES
(1, 1, 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/450251/item/vngoods_32_450251.jpg?width=1600&impolicy=quality_75', '2022-07-18 21:51:30'),
(2, 2, 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/444995/item/vngoods_69_444995.jpg?width=1600&impolicy=quality_75', '2022-07-18 21:51:30'),
(3, 3, 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/447814/item/vngoods_31_447814.jpg?width=1600&impolicy=quality_75', '2022-07-18 21:51:30'),
(4, 4, 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/455844/item/vngoods_09_455844.jpg?width=1600&impolicy=quality_75', '2022-07-18 21:51:30'),
(5, 5, 'https://product.hstatic.net/200000465365/product/upload_4c9d822127ff4d828c7502a62b7e4adc_large.jpg', '2022-07-18 21:51:30'),
(6, 6, 'https://product.hstatic.net/200000465365/product/upload_4c9d822127ff4d828c7502a62b7e4adc_large.jpg', '2022-07-18 21:51:30'),
(7, 7, 'https://tuitheothaogym.com/wp-content/uploads/2021/04/tui-xach-quan-ao-du-lich-tui-xach-du-lich-lon-gia-re-tui-xach-du-lich-da-tt-40001-25-550x550.jpg.webp', '2022-07-18 21:51:30'),
(8, 8, 'https://bizweb.dktcdn.net/100/164/528/products/c5-navy.jpg?v=1535012057813', '2022-07-18 21:51:30'),
(9, 9, 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/450251/item/vngoods_32_450251.jpg?width=1600&impolicy=quality_75', '2022-07-19 11:45:07'),
(10, 10, 'https://traffic-edge34.cdn.vncdn.io/nvn/ncdn/store/7136/ps/20220708/08072022110732_Web_daidien_thumb.jpg', '2022-07-19 11:45:07'),
(11, 11, 'https://traffic-edge02.cdn.vncdn.io/nvn/ncdn/store/7136/ps/20220708/08072022110725_Web_Daidien.jpg', '2022-07-19 11:45:07'),
(12, 12, 'https://traffic-edge34.cdn.vncdn.io/nvn/ncdn/store/7136/ps/20220708/08072022110732_Web_daidien_thumb.jpg', '2022-07-19 11:45:07'),
(13, 13, 'https://traffic-edge05.cdn.vncdn.io/nvn/ncdn/store/7136/ps/20220708/08072022100738_Web_Daidien_1.jpg', '2022-07-19 11:45:07'),
(14, 14, 'https://traffic-edge22.cdn.vncdn.io/nvn/ncdn/store/7136/ps/20220627/27062022100617_Web_1_thumb.jpg', '2022-07-19 11:45:07'),
(15, 15, 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/447814/item/vngoods_31_447814.jpg?width=1600&impolicy=quality_75', '2022-07-19 11:45:07'),
(16, 16, 'https://canifa.com/img/1000/1500/resize/6/b/6bs22s015-sy076-1.jpg', '2022-07-19 11:45:07'),
(17, 17, 'https://canifa.com/img/1000/1500/resize/6/t/6ts22s066-sw001-2-thumb.jpg', '2022-07-19 11:45:07'),
(18, 18, 'https://canifa.com/img/1000/1500/resize/6/d/6ds22s013-sb983-1-thumb.jpg', '2022-07-19 11:45:07'),
(19, 19, 'https://traffic-edge32.cdn.vncdn.io/nvn/ncdn/store/7136/ps/20220219/19022022080214_A__O_THUN_NU_____W2ATN01217BOSBA___ToTo___Shop__10__thumb.jpg', '2022-07-19 11:45:07'),
(20, 20, 'https://traffic-edge45.cdn.vncdn.io/nvn/ncdn/store/7136/ps/20220122/22012022110121_ao_thun_nu_W2ATN01208BOSBA_toto_shop__1__thumb.jpg', '2022-07-19 11:45:07'),
(21, 21, 'https://product.hstatic.net/200000465365/product/upload_4c9d822127ff4d828c7502a62b7e4adc_large.jpg', '2022-07-19 11:45:07'),
(22, 22, 'https://product.hstatic.net/1000290074/product/rabity__94__9230a045cb064ad8ae64b5d28cd3edb1_large.jpg', '2022-07-19 11:45:07'),
(23, 23, 'https://product.hstatic.net/1000290074/product/rabity__100__398498273f0a4a2ab25a2c3a0756e959_large.jpg', '2022-07-19 11:45:07'),
(24, 24, 'https://product.hstatic.net/1000290074/product/rabity__61__60ce64cc3e194b45adf9dda2c39ce873_large.jpg', '2022-07-19 11:45:07'),
(25, 25, 'https://product.hstatic.net/1000290074/product/rabity__89__4c4a515351f940038de5be82c4b4f3c9_large.jpg', '2022-07-19 11:45:07'),
(26, 26, 'https://product.hstatic.net/1000290074/product/rabity__89__4c4a515351f940038de5be82c4b4f3c9_large.jpg', '2022-07-19 11:50:43'),
(27, 27, 'https://cdn.elly.vn/uploads/2018/06/14075408/Tui-xach-nu-thoi-trang-cao-cap-ELLY-EL98-13-1-300x300.jpg', '2022-07-19 11:50:43'),
(28, 28, 'https://cdn.elly.vn/uploads/2018/12/13230224/Day-lung-nu-cao-cap-da-that-ED19-11-300x300.jpg', '2022-07-19 11:50:43'),
(29, 29, 'https://cdn.elly.vn/uploads/2018/05/14102241/kinh-mat-nam-cao-cap-Elly-Ekm68-3-300x300.jpg', '2022-07-19 11:50:43'),
(30, 30, 'https://cdn.elly.vn/uploads/2019/08/13120748/giay-nam-cao-cap-da-that-ELLY-EGTM4-20-300x300.jpg', '2022-07-19 11:50:43'),
(31, 31, 'https://cdn.elly.vn/uploads/2019/09/28101434/vi-nam-cam-tay-cao-cap-da-that-ELLY-EVM1-15-300x300.jpg', '2022-07-19 11:50:43'),
(32, 32, 'https://cdn.elly.vn/uploads/2017/08/29221015/tui-xach-nu-thoi-trang-cao-cap-elly-el85-4-5-300x300.jpg', '2022-07-19 11:50:43'),
(33, 1, 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/April2022/33-0.jpg', '2022-07-20 20:57:28'),
(34, 1, 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/February2022/IMG_6966-copys.jpg', '2022-07-20 20:57:28'),
(35, 39, 'https://traffic-edge34.cdn.vncdn.io/nvn/ncdn/store/7136/ps/20220708/08072022110732_Web_daidien_thumb.jpg', '2022-07-25 19:17:10');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `fullName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `gender` enum('male','female') COLLATE utf8_unicode_ci NOT NULL,
  `birthday` date NOT NULL,
  `avatar` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `active` enum('0','1') COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `user_id` int(11) NOT NULL,
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `fullName`, `gender`, `birthday`, `avatar`, `active`, `created_at`, `user_id`, `username`, `password`) VALUES
(1, 'Nguyen Van A', '', '0000-00-00', 'avatar', '', '2022-08-13 17:25:20', 1, 'admin', 'admin'),
(2, 'Nguyen Van B', '', '0000-00-00', 'avatar', '', '2022-08-13 17:25:20', 1, 'user1', 'user1');

-- --------------------------------------------------------

--
-- Table structure for table `vouchers`
--

CREATE TABLE `vouchers` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `type_discount` enum('amount','percent') COLLATE utf8_unicode_ci NOT NULL,
  `discount` float NOT NULL,
  `note` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `date_expired` datetime NOT NULL,
  `user_id` int(11) NOT NULL,
  `max_use` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `voucher_details`
--

CREATE TABLE `voucher_details` (
  `id` int(11) NOT NULL,
  `code` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `voucher_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `event_products`
--
ALTER TABLE `event_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoice_details`
--
ALTER TABLE `invoice_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vouchers`
--
ALTER TABLE `vouchers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `voucher_details`
--
ALTER TABLE `voucher_details`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `event_products`
--
ALTER TABLE `event_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT for table `invoice_details`
--
ALTER TABLE `invoice_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `product_images`
--
ALTER TABLE `product_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `vouchers`
--
ALTER TABLE `vouchers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `voucher_details`
--
ALTER TABLE `voucher_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
