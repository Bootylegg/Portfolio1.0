CREATE TABLE `users` (
`id` int NOT NULL,
`name` varchar(100) NOT NULL,
`email` varchar(100) NOT NULL,
`mobile` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
ALTER TABLE `users`
ADD PRIMARY KEY (`id`);
ALTER TABLE `users`
MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
INSERT INTO `users` (`name`, `email`, `mobile`) VALUES ('Ids Osinga', 'ip.osinga@alfa-college.nl', '0612345678');
INSERT INTO `users` (`name`, `email`, `mobile`) VALUES ('Jörgen Nieboer', 'aj.nieboer@alfa-college.nl', '0687654321');
INSERT INTO `users` (`name`, `email`, `mobile`) VALUES ('Francisca Fouchier', 'fj.fouchier@alfa-college.nl', '0687651234');