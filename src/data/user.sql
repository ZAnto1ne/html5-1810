/*
 Navicat Premium Data Transfer

 Source Server         : study
 Source Server Type    : MySQL
 Source Server Version : 50714
 Source Host           : localhost:3306
 Source Schema         : user

 Target Server Type    : MySQL
 Target Server Version : 50714
 File Encoding         : 65001

 Date: 29/12/2018 15:15:40
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for buy
-- ----------------------------
DROP TABLE IF EXISTS `buy`;
CREATE TABLE `buy`  (
  `idx` int(255) NOT NULL AUTO_INCREMENT,
  `id` int(11) NOT NULL,
  `uname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `imgurl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` int(10) NULL DEFAULT NULL,
  `qty` int(11) NULL DEFAULT NULL,
  `allprice` int(10) NULL DEFAULT NULL,
  `buy` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`idx`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 229 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of buy
-- ----------------------------
INSERT INTO `buy` VALUES (226, 1, 'Calvin Klein', '../images/list/t1.png', '12', 302, 1, 302, '1');
INSERT INTO `buy` VALUES (228, 1, 'Calvin Klein', '../images/list/t1.png', '12', 302, 1, 302, '0');

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list`  (
  `id` int(11) NOT NULL,
  `imgurl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `goodname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `jies` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` int(10) NULL DEFAULT NULL,
  `rd` int(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES (1, '../images/list/t1.png', 'Calvin Klein', '男士不知道干什么的', 302, 230);
INSERT INTO `list` VALUES (2, '../images/list/t2.png', 'ewrasdf', '男士短袖纯棉T恤', 1633, 123);
INSERT INTO `list` VALUES (3, '../images/list/t3.png', 'Calvin Klein Jeans', '男士黑白色短袖 棉 T恤', 302, 213);
INSERT INTO `list` VALUES (4, '../images/list/t4.png', 'Burberry', '男士黑白色短袖T恤', 304, 333);
INSERT INTO `list` VALUES (5, '../images/list/t5.png', 'Calvin Klein Jeans', '男士圆领休闲短袖T恤', 234, 111);
INSERT INTO `list` VALUES (6, '../images/list/t6.png', 'Calvin Klein', '男士不知道干什么的', 234, 240);
INSERT INTO `list` VALUES (7, '../images/list/t7.png', 'ewrasdf', '男士短袖纯棉T恤', 1233, 333);
INSERT INTO `list` VALUES (8, '../images/list/t8.png', 'Calvin Klein Jeans', '男士黑白色短袖 棉 T恤', 423, 384);
INSERT INTO `list` VALUES (9, '../images/list/t1.png', 'Burberry', '男士黑白色短袖T恤', 234, 362);
INSERT INTO `list` VALUES (10, '../images/list/t2.png', 'Calvin Klein Jeans', '男士圆领休闲短袖T恤', 123, 354);
INSERT INTO `list` VALUES (11, '../images/list/t3.png', 'Calvin Klein', '男士不知道干什么的', 1234, 302);
INSERT INTO `list` VALUES (12, '../images/list/t4.png', 'ewrasdf', '男士短袖纯棉T恤', 3452, 455);
INSERT INTO `list` VALUES (13, '../images/list/t5.png', 'Calvin Klein Jeans', '男士黑白色短袖 棉 T恤', 121, 407);
INSERT INTO `list` VALUES (14, '../images/list/t6.png', 'Burberry', '男士黑白色短袖T恤', 797, 260);
INSERT INTO `list` VALUES (15, '../images/list/t7.png', 'Calvin Klein Jeans', '男士圆领休闲短袖T恤', 712, 403);
INSERT INTO `list` VALUES (16, '../images/list/t8.png', 'Calvin Klein', '男士不知道干什么的', 3701, 273);
INSERT INTO `list` VALUES (17, '../images/list/t1.png', 'ewrasdf', '男士短袖纯棉T恤', 1473, 354);
INSERT INTO `list` VALUES (18, '../images/list/t2.png', 'Calvin Klein Jeans', '男士黑白色短袖 棉 T恤', 318, 211);
INSERT INTO `list` VALUES (19, '../images/list/t3.png', 'Burberry', '男士黑白色短袖T恤', 282, 272);
INSERT INTO `list` VALUES (20, '../images/list/t4.png', 'Calvin Klein Jeans', '男士圆领休闲短袖T恤', 4793, 237);
INSERT INTO `list` VALUES (21, '../images/list/t5.png', 'Calvin Klein', '男士不知道干什么的', 3377, 406);
INSERT INTO `list` VALUES (22, '../images/list/t6.png', 'ewrasdf', '男士短袖纯棉T恤', 3300, 349);
INSERT INTO `list` VALUES (23, '../images/list/t7.png', 'Calvin Klein Jeans', '男士黑白色短袖 棉 T恤', 4355, 132);
INSERT INTO `list` VALUES (24, '../images/list/t8.png', 'Burberry', '男士黑白色短袖T恤', 3405, 289);
INSERT INTO `list` VALUES (25, '../images/list/t1.png', 'Calvin Klein Jeans', '男士圆领休闲短袖T恤', 4370, 360);
INSERT INTO `list` VALUES (26, '../images/list/t2.png', 'Calvin Klein', '男士不知道干什么的', 493, 286);
INSERT INTO `list` VALUES (27, '../images/list/t3.png', 'ewrasdf', '男士短袖纯棉T恤', 1956, 105);
INSERT INTO `list` VALUES (28, '../images/list/t4.png', 'Calvin Klein Jeans', '男士黑白色短袖 棉 T恤', 3530, 493);
INSERT INTO `list` VALUES (29, '../images/list/t5.png', 'Burberry', '男士黑白色短袖T恤', 2706, 190);
INSERT INTO `list` VALUES (30, '../images/list/t6.png', 'Calvin Klein Jeans', '男士圆领休闲短袖T恤', 296, 250);
INSERT INTO `list` VALUES (31, '../images/list/t7.png', 'Calvin Klein', '男士不知道干什么的', 3067, 490);
INSERT INTO `list` VALUES (32, '../images/list/t8.png', 'ewrasdf', '男士短袖纯棉T恤', 3523, 304);
INSERT INTO `list` VALUES (33, '../images/list/t1.png', 'Calvin Klein Jeans', '男士黑白色短袖 棉 T恤', 481, 198);
INSERT INTO `list` VALUES (34, '../images/list/t2.png', 'Burberry', '男士黑白色短袖T恤', 1799, 282);
INSERT INTO `list` VALUES (35, '../images/list/t3.png', 'Calvin Klein Jeans', '男士圆领休闲短袖T恤', 605, 186);
INSERT INTO `list` VALUES (36, '../images/list/t4.png', 'Calvin Klein', '男士不知道干什么的', 4061, 318);
INSERT INTO `list` VALUES (37, '../images/list/t5.png', 'ewrasdf', '男士短袖纯棉T恤', 1471, 453);
INSERT INTO `list` VALUES (38, '../images/list/t6.png', 'Calvin Klein Jeans', '男士黑白色短袖 棉 T恤', 1736, 494);
INSERT INTO `list` VALUES (39, '../images/list/t7.png', 'Burberry', '男士黑白色短袖T恤', 640, 422);
INSERT INTO `list` VALUES (40, '../images/list/t8.png', 'Calvin Klein Jeans', '男士圆领休闲短袖T恤', 2953, 115);
INSERT INTO `list` VALUES (41, '../images/list/t1.png', 'Calvin Klein', '男士不知道干什么的', 2510, 318);
INSERT INTO `list` VALUES (42, '../images/list/t2.png', 'ewrasdf', '男士短袖纯棉T恤', 3138, 190);
INSERT INTO `list` VALUES (43, '../images/list/t3.png', 'Calvin Klein Jeans', '男士黑白色短袖 棉 T恤', 2239, 163);
INSERT INTO `list` VALUES (44, '../images/list/t4.png', 'Burberry', '男士黑白色短袖T恤', 2792, 192);
INSERT INTO `list` VALUES (45, '../images/list/t5.png', 'Calvin Klein Jeans', '男士圆领休闲短袖T恤', 2143, 494);
INSERT INTO `list` VALUES (46, '../images/list/t6.png', 'Calvin Klein', '男士不知道干什么的', 3557, 480);
INSERT INTO `list` VALUES (47, '../images/list/t7.png', 'ewrasdf', '男士短袖纯棉T恤', 1649, 288);
INSERT INTO `list` VALUES (48, '../images/list/t8.png', 'Calvin Klein Jeans', '男士黑白色短袖 棉 T恤', 2590, 344);
INSERT INTO `list` VALUES (49, '../images/list/t1.png', 'Burberry', '男士黑白色短袖T恤', 223, 114);
INSERT INTO `list` VALUES (50, '../images/list/t2.png', 'Calvin Klein Jeans', '男士圆领休闲短袖T恤', 928, 252);
INSERT INTO `list` VALUES (51, '../images/list/t3.png', 'Calvin Klein', '男士不知道干什么的', 1162, 107);
INSERT INTO `list` VALUES (52, '../images/list/t4.png', 'ewrasdf', '男士短袖纯棉T恤', 914, 437);
INSERT INTO `list` VALUES (53, '../images/list/t5.png', 'Calvin Klein Jeans', '男士黑白色短袖 棉 T恤', 591, 233);
INSERT INTO `list` VALUES (54, '../images/list/t6.png', 'Burberry', '男士黑白色短袖T恤', 4090, 278);
INSERT INTO `list` VALUES (55, '../images/list/t7.png', 'Calvin Klein Jeans', '男士圆领休闲短袖T恤', 1769, 106);
INSERT INTO `list` VALUES (56, '../images/list/t8.png', 'Calvin Klein', '男士不知道干什么的', 2817, 180);
INSERT INTO `list` VALUES (57, '../images/list/t1.png', 'ewrasdf', '男士短袖纯棉T恤', 1926, 215);
INSERT INTO `list` VALUES (58, '../images/list/t2.png', 'Calvin Klein Jeans', '男士黑白色短袖 棉 T恤', 3683, 251);
INSERT INTO `list` VALUES (59, '../images/list/t3.png', 'Burberry', '男士黑白色短袖T恤', 943, 435);
INSERT INTO `list` VALUES (60, '../images/list/t4.png', 'Calvin Klein Jeans', '男士圆领休闲短袖T恤', 1688, 169);
INSERT INTO `list` VALUES (61, '../images/list/t5.png', 'Calvin Klein', '男士不知道干什么的', 2838, 178);
INSERT INTO `list` VALUES (62, '../images/list/t6.png', 'Calvin Klein', '男士不知道干什么的', 3392, 200);
INSERT INTO `list` VALUES (63, '../images/list/t7.png', 'ewrasdf', '男士短袖纯棉T恤', 2566, 288);
INSERT INTO `list` VALUES (64, '../images/list/t8.png', 'Calvin Klein Jeans', '男士黑白色短袖 棉 T恤', 919, 356);
INSERT INTO `list` VALUES (65, '../images/list/t1.png', 'Burberry', '男士黑白色短袖T恤', 4873, 451);
INSERT INTO `list` VALUES (66, '../images/list/t2.png', 'Calvin Klein Jeans', '男士圆领休闲短袖T恤', 3934, 428);
INSERT INTO `list` VALUES (67, '../images/list/t3.png', 'Calvin Klein', '男士不知道干什么的', 2300, 451);
INSERT INTO `list` VALUES (68, '../images/list/t4.png', 'ewrasdf', '男士短袖纯棉T恤', 1914, 316);
INSERT INTO `list` VALUES (69, '../images/list/t5.png', 'Calvin Klein Jeans', '男士黑白色短袖 棉 T恤', 2560, 100);
INSERT INTO `list` VALUES (70, '../images/list/t6.png', 'Burberry', '男士黑白色短袖T恤', 668, 409);
INSERT INTO `list` VALUES (71, '../images/list/t7.png', 'Calvin Klein Jeans', '男士圆领休闲短袖T恤', 1604, 115);
INSERT INTO `list` VALUES (72, '../images/list/t8.png', 'Calvin Klein', '男士不知道干什么的', 2510, 274);
INSERT INTO `list` VALUES (73, '../images/list/t1.png', 'ewrasdf', '男士短袖纯棉T恤', 2104, 344);
INSERT INTO `list` VALUES (74, '../images/list/t2.png', 'Calvin Klein Jeans', '男士黑白色短袖 棉 T恤', 1825, 249);
INSERT INTO `list` VALUES (75, '../images/list/t3.png', 'Burberry', '男士黑白色短袖T恤', 127, 347);
INSERT INTO `list` VALUES (76, '../images/list/t4.png', 'Calvin Klein Jeans', '男士圆领休闲短袖T恤', 4557, 338);
INSERT INTO `list` VALUES (77, '../images/list/t5.png', 'Calvin Klein', '男士不知道干什么的', 3847, 438);
INSERT INTO `list` VALUES (78, '../images/list/t6.png', 'ewrasdf', '男士短袖纯棉T恤', 2271, 308);
INSERT INTO `list` VALUES (79, '../images/list/t7.png', 'Calvin Klein Jeans', '男士黑白色短袖 棉 T恤', 1543, 321);
INSERT INTO `list` VALUES (80, '../images/list/t8.png', 'Burberry', '男士黑白色短袖T恤', 3782, 468);
INSERT INTO `list` VALUES (81, '../images/list/t1.png', 'Calvin Klein Jeans', '男士圆领休闲短袖T恤', 4268, 223);
INSERT INTO `list` VALUES (82, '../images/list/t2.png', 'Calvin Klein', '男士不知道干什么的', 3170, 151);
INSERT INTO `list` VALUES (83, '../images/list/t3.png', 'ewrasdf', '男士短袖纯棉T恤', 4611, 489);
INSERT INTO `list` VALUES (84, '../images/list/t4.png', 'Calvin Klein Jeans', '男士黑白色短袖 棉 T恤', 4692, 205);
INSERT INTO `list` VALUES (85, '../images/list/t5.png', 'Burberry', '男士黑白色短袖T恤', 2897, 100);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `uname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pwd` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 26 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (2, '12', '12');
INSERT INTO `user` VALUES (5, '123', '1111');
INSERT INTO `user` VALUES (17, '1233', '123');

SET FOREIGN_KEY_CHECKS = 1;
