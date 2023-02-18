CREATE TABLE category(
    category_id SERIAL PRIMARY KEY,
    category_name TEXT NOT NULL
);

CREATE TABLE master(
    master_id SERIAL PRIMARY KEY,
    master_name TEXT NOT NULL,
    master_surname TEXT NOT NULL,
    master_age INT,
    master_phone VARCHAR(20),
    master_office_name TEXT, 
    master_address TEXT,
    master_location TEXT,
    master_work_time_from VARCHAR(32),
    master_work_time_to VARCHAR(32),
    master_spend_time INT
    
);

CREATE TABLE client(
    client_id SERIAL PRIMARY KEY,
    client_name TEXT,
    client_surname TEXT,
    client_phone VARCHAR(20),
    client_location TEXT
);




-- CREATE OR REPLACE FUNCTION masterWorkTime(id INT)
-- RETURNS TABLE(workingDays TEXT, workTime int)
-- LANGUAGE plpgsql
-- AS
-- $$
-- BEGIN
--     RETURN QUERY SELECT 
--         master_id,
--         master_name,
--         master_surname,
--         working_days_name TEXT,
--         master_work_time_from INT,
--         master_work_time_to INT,
--         master_spend_time
--     FROM 
--         master
--     WHERE
--         (master_work_time_to - master_work_time_from) : master_spend_time

