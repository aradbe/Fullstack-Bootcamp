SELECT patient.id, disease.survival_rate
FROM patient
JOIN disease ON patient.disease = disease.name
ORDER BY patient.id ASC;
