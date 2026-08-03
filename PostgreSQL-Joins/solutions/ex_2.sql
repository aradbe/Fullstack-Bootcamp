SELECT COUNT(*) AS sick_patients
FROM patient
WHERE disease IS NOT NULL;
