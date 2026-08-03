SELECT ethnicity.name AS ethnicity, COUNT(*) AS patient_count
FROM patient
JOIN ethnicity ON patient.ethnicity = ethnicity.id
WHERE patient.disease = 'lettuce disease'
GROUP BY ethnicity.id, ethnicity.name
ORDER BY ethnicity.id;
