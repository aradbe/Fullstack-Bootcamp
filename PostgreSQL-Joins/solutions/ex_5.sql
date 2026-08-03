SELECT patient.symptoms_family, COUNT(*) AS patient_count
FROM patient
WHERE patient.disease = 'cabbage disease'
GROUP BY patient.symptoms_family
ORDER BY patient.symptoms_family;
