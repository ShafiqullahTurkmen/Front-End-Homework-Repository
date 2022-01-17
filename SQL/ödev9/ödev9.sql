--city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
SELECT city, country from country
INNER JOIN city ON country.country_id = city.country_id;


--customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name
--isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
SELECT first_name, last_name FROM customer
INNER JOIN payment ON customer.customer_id = payment.customer_id;


--customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name
--isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
SELECT first_name, last_name FROM customer
INNER JOIN rental ON customer.customer_id = rental.customer_id;
