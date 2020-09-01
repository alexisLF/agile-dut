-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Mer 14 Juin 2017 à 12:31
-- Version du serveur: 5.5.24-log
-- Version de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `projet_agile`
--

-- --------------------------------------------------------

--
-- Structure de la table `case`
--

CREATE TABLE IF NOT EXISTS `case` (
  `X` int(11) NOT NULL,
  `Y` int(11) NOT NULL,
  `num_utilisateur` int(4) NOT NULL,
  `num_partie` int(4) NOT NULL,
  PRIMARY KEY (`X`,`Y`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `categorie_utilisateur`
--

CREATE TABLE IF NOT EXISTS `categorie_utilisateur` (
  `code_type` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `libelle_type` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`code_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `categorie_utilisateur`
--

INSERT INTO `categorie_utilisateur` (`code_type`, `libelle_type`) VALUES
('EL', 'Élève'),
('EN', 'Enseignant');

-- --------------------------------------------------------

--
-- Structure de la table `classe`
--

CREATE TABLE IF NOT EXISTS `classe` (
  `nom` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `niveau` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`nom`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `classe`
--

INSERT INTO `classe` (`nom`, `niveau`) VALUES
('3C', 'Troisième'),
('S11', 'Seconde');

-- --------------------------------------------------------

--
-- Structure de la table `participer`
--

CREATE TABLE IF NOT EXISTS `participer` (
  `num_utilisateur` int(4) NOT NULL,
  `num_partie` int(4) NOT NULL,
  `score` int(4) DEFAULT NULL,
  PRIMARY KEY (`num_utilisateur`,`num_partie`),
  KEY `fk_parti2` (`num_partie`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `partie`
--

CREATE TABLE IF NOT EXISTS `partie` (
  `num_partie` int(4) NOT NULL,
  `duree` float DEFAULT NULL,
  `duree_max` float DEFAULT NULL,
  `nombre_cases` int(4) NOT NULL,
  PRIMARY KEY (`num_partie`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE IF NOT EXISTS `utilisateur` (
  `num_utilisateur` int(4) NOT NULL,
  `nom` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `prenom` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_naissance` date DEFAULT NULL,
  `mdp` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `adresse_mail` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pseudonyme` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `categorie` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `classe` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`num_utilisateur`),
  UNIQUE KEY `adresse_mail` (`adresse_mail`),
  KEY `fk_util1` (`categorie`),
  KEY `fk_util2` (`classe`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `participer`
--
ALTER TABLE `participer`
  ADD CONSTRAINT `fk_parti2` FOREIGN KEY (`num_partie`) REFERENCES `partie` (`num_partie`),
  ADD CONSTRAINT `fk_parti1` FOREIGN KEY (`num_utilisateur`) REFERENCES `utilisateur` (`num_utilisateur`);

--
-- Contraintes pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD CONSTRAINT `fk_util2` FOREIGN KEY (`classe`) REFERENCES `classe` (`nom`),
  ADD CONSTRAINT `fk_util1` FOREIGN KEY (`categorie`) REFERENCES `categorie_utilisateur` (`code_type`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
