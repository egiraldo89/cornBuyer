--
-- PostgreSQL database dump
--

-- Dumped from database version 17.3
-- Dumped by pg_dump version 17.3

-- Started on 2025-02-16 13:59:46

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4810 (class 0 OID 16389)
-- Dependencies: 217
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20250215012221-create-users-table.js
20250215021043-create-purchase.js
20250215124956-remove-name-from-users.js
20250215125226-add-document-to-users.js
20250215125807-remove-request_number-from-users.js
20250215145108-change-lastDateRequest-to-bigint.js
20250215150734-create-settings-table.js
20250215151425-update-settings-columns.js
\.


--
-- TOC entry 4814 (class 0 OID 16403)
-- Dependencies: 221
-- Data for Name: purchases; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.purchases (id, "lastDateRequest", "numberOfPurchase", "UserId", "createdAt", "updatedAt") FROM stdin;
3	1739631480033	0	6	2025-02-15 09:58:00.033-05	2025-02-15 09:58:00.033-05
4	1739631593761	0	7	2025-02-15 09:59:53.762-05	2025-02-15 09:59:53.762-05
5	1739631665456	0	8	2025-02-15 10:01:05.456-05	2025-02-15 10:01:05.456-05
7	1739677632084	1	10	2025-02-15 22:45:15.193-05	2025-02-15 22:47:12.085-05
2	1739725982565	14	5	2025-02-15 09:52:34.106-05	2025-02-16 12:13:02.566-05
6	1739726029698	19	9	2025-02-15 10:03:18.525-05	2025-02-16 12:13:49.699-05
\.


--
-- TOC entry 4816 (class 0 OID 16422)
-- Dependencies: 223
-- Data for Name: settings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.settings (id, key, value) FROM stdin;
1	rateLimiter	60000
\.


--
-- TOC entry 4812 (class 0 OID 16395)
-- Dependencies: 219
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, "createdAt", "updatedAt", document) FROM stdin;
5	2025-02-15 09:52:34.094-05	2025-02-15 09:52:34.094-05	65452589
6	2025-02-15 09:58:00.023-05	2025-02-15 09:58:00.023-05	6545258
7	2025-02-15 09:59:53.753-05	2025-02-15 09:59:53.753-05	654525
8	2025-02-15 10:01:05.453-05	2025-02-15 10:01:05.453-05	65452
9	2025-02-15 10:03:18.505-05	2025-02-15 10:03:18.505-05	1037594346
10	2025-02-15 22:45:15.185-05	2025-02-15 22:45:15.185-05	
\.


--
-- TOC entry 4825 (class 0 OID 0)
-- Dependencies: 220
-- Name: purchases_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.purchases_id_seq', 7, true);


--
-- TOC entry 4826 (class 0 OID 0)
-- Dependencies: 222
-- Name: settings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.settings_id_seq', 1, false);


--
-- TOC entry 4827 (class 0 OID 0)
-- Dependencies: 218
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 10, true);


-- Completed on 2025-02-16 13:59:46

--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 17.3
-- Dumped by pg_dump version 17.3

-- Started on 2025-02-16 13:59:46

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4810 (class 0 OID 16389)
-- Dependencies: 217
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20250215012221-create-users-table.js
20250215021043-create-purchase.js
20250215124956-remove-name-from-users.js
20250215125226-add-document-to-users.js
20250215125807-remove-request_number-from-users.js
20250215145108-change-lastDateRequest-to-bigint.js
20250215150734-create-settings-table.js
20250215151425-update-settings-columns.js
\.


--
-- TOC entry 4814 (class 0 OID 16403)
-- Dependencies: 221
-- Data for Name: purchases; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.purchases (id, "lastDateRequest", "numberOfPurchase", "UserId", "createdAt", "updatedAt") FROM stdin;
3	1739631480033	0	6	2025-02-15 09:58:00.033-05	2025-02-15 09:58:00.033-05
4	1739631593761	0	7	2025-02-15 09:59:53.762-05	2025-02-15 09:59:53.762-05
5	1739631665456	0	8	2025-02-15 10:01:05.456-05	2025-02-15 10:01:05.456-05
7	1739677632084	1	10	2025-02-15 22:45:15.193-05	2025-02-15 22:47:12.085-05
2	1739725982565	14	5	2025-02-15 09:52:34.106-05	2025-02-16 12:13:02.566-05
6	1739726029698	19	9	2025-02-15 10:03:18.525-05	2025-02-16 12:13:49.699-05
\.


--
-- TOC entry 4816 (class 0 OID 16422)
-- Dependencies: 223
-- Data for Name: settings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.settings (id, key, value) FROM stdin;
1	rateLimiter	60000
\.


--
-- TOC entry 4812 (class 0 OID 16395)
-- Dependencies: 219
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, "createdAt", "updatedAt", document) FROM stdin;
5	2025-02-15 09:52:34.094-05	2025-02-15 09:52:34.094-05	65452589
6	2025-02-15 09:58:00.023-05	2025-02-15 09:58:00.023-05	6545258
7	2025-02-15 09:59:53.753-05	2025-02-15 09:59:53.753-05	654525
8	2025-02-15 10:01:05.453-05	2025-02-15 10:01:05.453-05	65452
9	2025-02-15 10:03:18.505-05	2025-02-15 10:03:18.505-05	1037594346
10	2025-02-15 22:45:15.185-05	2025-02-15 22:45:15.185-05	
\.


--
-- TOC entry 4825 (class 0 OID 0)
-- Dependencies: 220
-- Name: purchases_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.purchases_id_seq', 7, true);


--
-- TOC entry 4826 (class 0 OID 0)
-- Dependencies: 222
-- Name: settings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.settings_id_seq', 1, false);


--
-- TOC entry 4827 (class 0 OID 0)
-- Dependencies: 218
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 10, true);


-- Completed on 2025-02-16 13:59:46

--
-- PostgreSQL database dump complete
--

