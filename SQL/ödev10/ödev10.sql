--city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz LEFT JOIN sorgusunu yazınız.
SELECT city, country FROM CITY
LEFT JOIN country ON city.country_id = country.country_id;

--customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz
--RIGHT JOIN sorgusunu yazınız.
select first_name, last_name from customer
RIGHT JOIN payment ON customer.customer_id = payment.customer_id;


--customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz 
--FULL JOIN sorgusunu yazınız.
select first_name, last_name from customer
FULL JOIN rental ON customer.customer_id = rental.customer_id;
