--film tablosunda film uzunluğu length sütununda gösterilmektedir. Uzunluğu ortalama film uzunluğundan fazla kaç tane film vardır?

select count(*) from film
where length >
(select  FLOOR( AVG(length)) as ortalama from film);


--film tablosunda en yüksek rental_rate değerine sahip kaç tane film vardır?
select count(*) from film where rental_rate =
(select distinct(rental_rate) from film order by rental_rate desc limit 1);


--film tablosunda en düşük rental_rate ve en düşün replacement_cost değerlerine sahip filmleri sıralayınız.
select * from film 
where replacement_cost =
(select distinct(replacement_cost) from film order by replacement_cost limit 1)
and rental_rate =
(select distinct(rental_rate) from film order by rental_rate limit 1);


--payment tablosunda en fazla sayıda alışveriş yapan müşterileri(customer) sıralayınız.
select * from customer where customer_id = any
(select customer_id from payment where amount =
(select distinct(amount) from payment order by amount desc limit 1))