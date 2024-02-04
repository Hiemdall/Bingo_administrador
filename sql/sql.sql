CREATE TABLE celdas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    objeto VARCHAR(255) NOT NULL,
    estado TINYINT(1) NOT NULL DEFAULT 0,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

/*sql para crear datos de estado de los cartones*/
INSERT INTO celdas (objeto, estado, timestamp)
SELECT CONCAT('Objeto', numbers.n), 1, CURRENT_TIMESTAMP
FROM (
    SELECT 1 AS n
    UNION ALL SELECT 2
    UNION ALL SELECT 3
    UNION ALL SELECT 4
    /*numero de seldas que quierastener*/
) AS numbers;
