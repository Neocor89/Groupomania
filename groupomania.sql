-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 28 juin 2022 à 13:45
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `groupomania`
--

-- --------------------------------------------------------

--
-- Structure de la table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `posts`
--

INSERT INTO `posts` (`id`, `userId`, `content`, `imageUrl`, `createdAt`, `updatedAt`) VALUES
(1, 9, 'It is a midification of a first Test content', 'http.modify-testimage.png', '2022-06-27 21:42:51', '2022-06-27 21:50:16'),
(3, 9, 'It is a second Test content', 'avatar-placeholder.png', '2022-06-27 22:53:43', '2022-06-27 22:53:43');

-- --------------------------------------------------------

--
-- Structure de la table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220621134515-create-user.js'),
('20220621134741-create-post.js'),
('20220621221503-add_unique_email_user.js'),
('20220625144353-add_deleting_user.js');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `admin` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `imageUrl`, `admin`, `createdAt`, `updatedAt`, `deleted`) VALUES
(1, 'Ben', 'DevWeb', 'test@email.com', '$2b$10$vo.ZxAqKlUjVkeMbnTO0.O/D87iiX21VXpT/tUk2fKzljy3dIju5G', 'http.', 0, '2022-06-27 16:45:11', '2022-06-27 19:17:38', 0),
(3, 'Bend', 'C', 'test3@email.com', '$2b$10$EQ/Y4WYGxpACRC9crY0dgO0IPEbMcMID/42pEWcJrYedJueBVjCum', NULL, 0, '2022-06-27 17:58:42', '2022-06-27 17:58:42', 0),
(4, 'Ben', 'C', 'test26@email.com', '$2b$10$hH7y1TVBBQsg.8dGs1Yx.OLFImfesAnoPPZShUX2mXphjhA5m5YCi', NULL, 0, '2022-06-27 18:03:21', '2022-06-27 18:03:21', 0),
(5, 'Bena', 'C', 'testa@email.com', '$2b$10$XALU6Xgho7pyseuBVJQ9y.u8SH4YSVjJdD3FMl3L/L1ffoacBcko.', NULL, 0, '2022-06-27 18:12:02', '2022-06-27 18:12:02', 0),
(6, 'Benoit', 'C', 'teste@email.com', '$2b$10$KhZSIGY5RbGSOWRAk0x9r.Cx/Uug2VbU7W2DUeBe6xueAIXL4XH.a', NULL, 0, '2022-06-27 18:17:56', '2022-06-27 18:17:56', 0),
(7, 'Benoit', 'C', 'testf@email.com', '$2b$10$hf8nta35lCA26vyvL1d.PuyFqGBG1Dptzj7lAtsoS.2O7rVnzlXp.', NULL, 0, '2022-06-27 18:19:27', '2022-06-27 18:19:27', 0),
(8, 'Ben', 'C', 'testing@email.com', '$2b$10$0DKOvWG5UnNO7fsyn8oLGeljhCvfBZElXzi7VLMgc9fcQZp1lRECa', NULL, 0, '2022-06-27 18:26:13', '2022-06-27 18:26:13', 0),
(9, 'Jhon', 'Does', 'jhon@email.com', '$2b$10$8rL29fHyyVIfuprux72k..t9hYZZf7/s/bLaIieg6Hk.OWH5jlYFq', NULL, 0, '2022-06-27 21:38:04', '2022-06-27 23:07:58', 0),
(10, 'Beni', 'web', 'testbeni@email.com', '$2b$10$SuDTuyHYKSIPlho5AF/dCutJyP9dJP/BaAYEaL4TJMxZAdGPk0Ed.', NULL, 0, '2022-06-28 10:09:14', '2022-06-28 10:09:14', 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Index pour la table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
