--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: user_permissions_enum; Type: TYPE; Schema: public; Owner: franck
--

CREATE TYPE public.user_permissions_enum AS ENUM (
    'CreatePostes',
    'ReadPostes',
    'UpdatePostes',
    'DeletePostes',
    'CreateCategories',
    'ReadCategories',
    'UpdateCategories',
    'DeleteCategories',
    'CreateGroupes',
    'ReadGroupes',
    'UpdateGroupes',
    'DeleteGroupes',
    'CreateSouscriptions',
    'ReadSouscriptions',
    'UpdateSouscriptions',
    'DeleteSouscriptions',
    'CreateTarifs',
    'ReadTarifs',
    'UpdateTarifs',
    'DeleteTarifs',
    'GenererRapport'
);


ALTER TYPE public.user_permissions_enum OWNER TO franck;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: categorie; Type: TABLE; Schema: public; Owner: franck
--

CREATE TABLE public.categorie (
    id integer NOT NULL,
    nom character varying NOT NULL
);


ALTER TABLE public.categorie OWNER TO franck;

--
-- Name: categorie_id_seq; Type: SEQUENCE; Schema: public; Owner: franck
--

CREATE SEQUENCE public.categorie_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categorie_id_seq OWNER TO franck;

--
-- Name: categorie_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: franck
--

ALTER SEQUENCE public.categorie_id_seq OWNED BY public.categorie.id;


--
-- Name: freepost; Type: TABLE; Schema: public; Owner: franck
--

CREATE TABLE public.freepost (
    id integer NOT NULL,
    id_object integer NOT NULL
);


ALTER TABLE public.freepost OWNER TO franck;

--
-- Name: freepost_id_seq; Type: SEQUENCE; Schema: public; Owner: franck
--

CREATE SEQUENCE public.freepost_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.freepost_id_seq OWNER TO franck;

--
-- Name: freepost_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: franck
--

ALTER SEQUENCE public.freepost_id_seq OWNED BY public.freepost.id;


--
-- Name: groupe; Type: TABLE; Schema: public; Owner: franck
--

CREATE TABLE public.groupe (
    id integer NOT NULL,
    nom character varying NOT NULL,
    "categorieId" integer
);


ALTER TABLE public.groupe OWNER TO franck;

--
-- Name: groupe_id_seq; Type: SEQUENCE; Schema: public; Owner: franck
--

CREATE SEQUENCE public.groupe_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.groupe_id_seq OWNER TO franck;

--
-- Name: groupe_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: franck
--

ALTER SEQUENCE public.groupe_id_seq OWNED BY public.groupe.id;


--
-- Name: poste; Type: TABLE; Schema: public; Owner: franck
--

CREATE TABLE public.poste (
    id integer NOT NULL,
    nom character varying NOT NULL,
    object_id integer,
    "groupeId" integer,
    status character varying NOT NULL,
    gamer integer DEFAULT 0,
    start_time timestamp without time zone
);


ALTER TABLE public.poste OWNER TO franck;

--
-- Name: poste_id_seq; Type: SEQUENCE; Schema: public; Owner: franck
--

CREATE SEQUENCE public.poste_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.poste_id_seq OWNER TO franck;

--
-- Name: poste_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: franck
--

ALTER SEQUENCE public.poste_id_seq OWNED BY public.poste.id;


--
-- Name: rapport; Type: TABLE; Schema: public; Owner: franck
--

CREATE TABLE public.rapport (
    id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    hour timestamp without time zone DEFAULT now() NOT NULL,
    client character varying NOT NULL,
    amount integer NOT NULL,
    duration integer NOT NULL,
    category character varying NOT NULL,
    cashier character varying NOT NULL
);


ALTER TABLE public.rapport OWNER TO franck;

--
-- Name: rapport_id_seq; Type: SEQUENCE; Schema: public; Owner: franck
--

CREATE SEQUENCE public.rapport_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.rapport_id_seq OWNER TO franck;

--
-- Name: rapport_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: franck
--

ALTER SEQUENCE public.rapport_id_seq OWNED BY public.rapport.id;


--
-- Name: souscription; Type: TABLE; Schema: public; Owner: franck
--

CREATE TABLE public.souscription (
    id integer NOT NULL,
    "clientId" integer NOT NULL,
    "groupeId" integer NOT NULL,
    montant integer NOT NULL,
    duree integer NOT NULL,
    "dureeRestante" integer NOT NULL
);


ALTER TABLE public.souscription OWNER TO franck;

--
-- Name: souscription_id_seq; Type: SEQUENCE; Schema: public; Owner: franck
--

CREATE SEQUENCE public.souscription_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.souscription_id_seq OWNER TO franck;

--
-- Name: souscription_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: franck
--

ALTER SEQUENCE public.souscription_id_seq OWNED BY public.souscription.id;


--
-- Name: tarif; Type: TABLE; Schema: public; Owner: franck
--

CREATE TABLE public.tarif (
    id integer NOT NULL,
    label character varying NOT NULL,
    montant integer NOT NULL,
    duree integer NOT NULL,
    "groupeId" integer
);


ALTER TABLE public.tarif OWNER TO franck;

--
-- Name: tarif_id_seq; Type: SEQUENCE; Schema: public; Owner: franck
--

CREATE SEQUENCE public.tarif_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tarif_id_seq OWNER TO franck;

--
-- Name: tarif_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: franck
--

ALTER SEQUENCE public.tarif_id_seq OWNED BY public.tarif.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: franck
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    nom character varying,
    prenoms character varying,
    pseudo character varying NOT NULL,
    type character varying NOT NULL,
    phone character varying,
    permissions public.user_permissions_enum[] DEFAULT '{}'::public.user_permissions_enum[] NOT NULL,
    password character varying NOT NULL,
    "currentHashedRefreshToken" character varying,
    access_report boolean DEFAULT false NOT NULL
);


ALTER TABLE public."user" OWNER TO franck;

--
-- Name: user_categories_categorie; Type: TABLE; Schema: public; Owner: franck
--

CREATE TABLE public.user_categories_categorie (
    "userId" integer NOT NULL,
    "categorieId" integer NOT NULL
);


ALTER TABLE public.user_categories_categorie OWNER TO franck;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: franck
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO franck;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: franck
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: categorie id; Type: DEFAULT; Schema: public; Owner: franck
--

ALTER TABLE ONLY public.categorie ALTER COLUMN id SET DEFAULT nextval('public.categorie_id_seq'::regclass);


--
-- Name: freepost id; Type: DEFAULT; Schema: public; Owner: franck
--

ALTER TABLE ONLY public.freepost ALTER COLUMN id SET DEFAULT nextval('public.freepost_id_seq'::regclass);


--
-- Name: groupe id; Type: DEFAULT; Schema: public; Owner: franck
--

ALTER TABLE ONLY public.groupe ALTER COLUMN id SET DEFAULT nextval('public.groupe_id_seq'::regclass);


--
-- Name: poste id; Type: DEFAULT; Schema: public; Owner: franck
--

ALTER TABLE ONLY public.poste ALTER COLUMN id SET DEFAULT nextval('public.poste_id_seq'::regclass);


--
-- Name: rapport id; Type: DEFAULT; Schema: public; Owner: franck
--

ALTER TABLE ONLY public.rapport ALTER COLUMN id SET DEFAULT nextval('public.rapport_id_seq'::regclass);


--
-- Name: souscription id; Type: DEFAULT; Schema: public; Owner: franck
--

ALTER TABLE ONLY public.souscription ALTER COLUMN id SET DEFAULT nextval('public.souscription_id_seq'::regclass);


--
-- Name: tarif id; Type: DEFAULT; Schema: public; Owner: franck
--

ALTER TABLE ONLY public.tarif ALTER COLUMN id SET DEFAULT nextval('public.tarif_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: franck
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: categorie; Type: TABLE DATA; Schema: public; Owner: franck
--

COPY public.categorie (id, nom) FROM stdin;
1	xbox
2	ps
3	manette
\.


--
-- Data for Name: freepost; Type: TABLE DATA; Schema: public; Owner: franck
--

COPY public.freepost (id, id_object) FROM stdin;
146	141
147	18
148	14
149	131
150	19
\.


--
-- Data for Name: groupe; Type: TABLE DATA; Schema: public; Owner: franck
--

COPY public.groupe (id, nom, "categorieId") FROM stdin;
53	xbox 1	1
54	xbox 2	1
55	ps 1	2
56	ps 2	2
\.


--
-- Data for Name: poste; Type: TABLE DATA; Schema: public; Owner: franck
--

COPY public.poste (id, nom, object_id, "groupeId", status, gamer, start_time) FROM stdin;
160	post 8	8	53	off	0	\N
161	post 7	7	53	off	0	\N
162	post 9	9	53	off	0	\N
163	post 10	10	54	off	0	\N
164	post 16	16	54	off	0	\N
165	post 110	110	54	off	0	\N
166	post 151	151	55	off	0	\N
167	post 12	12	55	off	0	\N
168	post 6	6	55	off	0	\N
169	post 111	111	56	off	0	\N
170	post 17	17	56	off	0	\N
171	post 121	121	56	off	0	\N
\.


--
-- Data for Name: rapport; Type: TABLE DATA; Schema: public; Owner: franck
--

COPY public.rapport (id, created_at, hour, client, amount, duration, category, cashier) FROM stdin;
\.


--
-- Data for Name: souscription; Type: TABLE DATA; Schema: public; Owner: franck
--

COPY public.souscription (id, "clientId", "groupeId", montant, duree, "dureeRestante") FROM stdin;
36	59	53	1000	60	60
37	60	55	5000	450	450
\.


--
-- Data for Name: tarif; Type: TABLE DATA; Schema: public; Owner: franck
--

COPY public.tarif (id, label, montant, duree, "groupeId") FROM stdin;
22	tombola	1000	60	53
23	xpress	500	30	54
24	expensive	5000	450	55
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: franck
--

COPY public."user" (id, nom, prenoms, pseudo, type, phone, permissions, password, "currentHashedRefreshToken", access_report) FROM stdin;
64	\N	\N	charbel	gerant	\N	{}	$2b$10$YkP.Nq5ZzYPUGww5dsqJe.yPxCTBOu.yS4iNTdlvUemfbs/dLzXTu	\N	t
59	\N	\N	Duamelo	promoteur	\N	{}	$2b$10$OG6uhtbm0eNnCbl.F8xZlOiCohiG3BYAu2.VvBm0GVmgDKIKBnA0K	$2b$10$2jGJeZAPyyu4k/52bFcIbORKqfTWNKx7s8.MX1UEzDb1L4H2UjYNC	t
60	\N	\N	dani	client	\N	{}	$2b$10$WLuw4p2mZgZ7.onrWof36uN59ewkinY1htkLY6SNX1BQbXSokDAkm	$2b$10$7z0YrkNwLUhdXzZzwk2BzOLMZpjEmgccs9wPOXz6qMqR50nnzePZS	f
\.


--
-- Data for Name: user_categories_categorie; Type: TABLE DATA; Schema: public; Owner: franck
--

COPY public.user_categories_categorie ("userId", "categorieId") FROM stdin;
\.


--
-- Name: categorie_id_seq; Type: SEQUENCE SET; Schema: public; Owner: franck
--

SELECT pg_catalog.setval('public.categorie_id_seq', 3, true);


--
-- Name: freepost_id_seq; Type: SEQUENCE SET; Schema: public; Owner: franck
--

SELECT pg_catalog.setval('public.freepost_id_seq', 150, true);


--
-- Name: groupe_id_seq; Type: SEQUENCE SET; Schema: public; Owner: franck
--

SELECT pg_catalog.setval('public.groupe_id_seq', 56, true);


--
-- Name: poste_id_seq; Type: SEQUENCE SET; Schema: public; Owner: franck
--

SELECT pg_catalog.setval('public.poste_id_seq', 171, true);


--
-- Name: rapport_id_seq; Type: SEQUENCE SET; Schema: public; Owner: franck
--

SELECT pg_catalog.setval('public.rapport_id_seq', 3, true);


--
-- Name: souscription_id_seq; Type: SEQUENCE SET; Schema: public; Owner: franck
--

SELECT pg_catalog.setval('public.souscription_id_seq', 37, true);


--
-- Name: tarif_id_seq; Type: SEQUENCE SET; Schema: public; Owner: franck
--

SELECT pg_catalog.setval('public.tarif_id_seq', 24, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: franck
--

SELECT pg_catalog.setval('public.user_id_seq', 64, true);


--
-- Name: user_categories_categorie PK_32c5babe495dde32f7a30e704b1; Type: CONSTRAINT; Schema: public; Owner: franck
--

ALTER TABLE ONLY public.user_categories_categorie
    ADD CONSTRAINT "PK_32c5babe495dde32f7a30e704b1" PRIMARY KEY ("userId", "categorieId");


--
-- Name: groupe PK_3fd12834b4d2e8eb5c3ef8cf5bd; Type: CONSTRAINT; Schema: public; Owner: franck
--

ALTER TABLE ONLY public.groupe
    ADD CONSTRAINT "PK_3fd12834b4d2e8eb5c3ef8cf5bd" PRIMARY KEY (id);


--
-- Name: rapport PK_4432bdd28fe2cafbfd98c419032; Type: CONSTRAINT; Schema: public; Owner: franck
--

ALTER TABLE ONLY public.rapport
    ADD CONSTRAINT "PK_4432bdd28fe2cafbfd98c419032" PRIMARY KEY (id);


--
-- Name: categorie PK_a761331f20634c53bf660312062; Type: CONSTRAINT; Schema: public; Owner: franck
--

ALTER TABLE ONLY public.categorie
    ADD CONSTRAINT "PK_a761331f20634c53bf660312062" PRIMARY KEY (id);


--
-- Name: poste PK_ab873d28c931d6a07dc0493882d; Type: CONSTRAINT; Schema: public; Owner: franck
--

ALTER TABLE ONLY public.poste
    ADD CONSTRAINT "PK_ab873d28c931d6a07dc0493882d" PRIMARY KEY (id);


--
-- Name: user PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: franck
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


--
-- Name: tarif PK_e0032bad5ceec96efad86c45944; Type: CONSTRAINT; Schema: public; Owner: franck
--

ALTER TABLE ONLY public.tarif
    ADD CONSTRAINT "PK_e0032bad5ceec96efad86c45944" PRIMARY KEY (id);


--
-- Name: freepost PK_e7e3cb9cf0e8662948890f2154d; Type: CONSTRAINT; Schema: public; Owner: franck
--

ALTER TABLE ONLY public.freepost
    ADD CONSTRAINT "PK_e7e3cb9cf0e8662948890f2154d" PRIMARY KEY (id);


--
-- Name: souscription PK_ea1b870fec97d753f0078ea8204; Type: CONSTRAINT; Schema: public; Owner: franck
--

ALTER TABLE ONLY public.souscription
    ADD CONSTRAINT "PK_ea1b870fec97d753f0078ea8204" PRIMARY KEY (id);


--
-- Name: tarif UQ_7d65ed3a7643bbb18d621f4efa2; Type: CONSTRAINT; Schema: public; Owner: franck
--

ALTER TABLE ONLY public.tarif
    ADD CONSTRAINT "UQ_7d65ed3a7643bbb18d621f4efa2" UNIQUE (label);


--
-- Name: poste UQ_894d10c2108c9f29bf2a1678696; Type: CONSTRAINT; Schema: public; Owner: franck
--

ALTER TABLE ONLY public.poste
    ADD CONSTRAINT "UQ_894d10c2108c9f29bf2a1678696" UNIQUE (nom);


--
-- Name: freepost UQ_a13ec472f899adadca1dfb1b31f; Type: CONSTRAINT; Schema: public; Owner: franck
--

ALTER TABLE ONLY public.freepost
    ADD CONSTRAINT "UQ_a13ec472f899adadca1dfb1b31f" UNIQUE (id_object);


--
-- Name: user UQ_be726a825c7254f55be1540601a; Type: CONSTRAINT; Schema: public; Owner: franck
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_be726a825c7254f55be1540601a" UNIQUE (pseudo);


--
-- Name: categorie UQ_e27c99f0289647ed290b49d17a2; Type: CONSTRAINT; Schema: public; Owner: franck
--

ALTER TABLE ONLY public.categorie
    ADD CONSTRAINT "UQ_e27c99f0289647ed290b49d17a2" UNIQUE (nom);


--
-- Name: groupe UQ_e6b0cdba8bd0de3d13270d1c107; Type: CONSTRAINT; Schema: public; Owner: franck
--

ALTER TABLE ONLY public.groupe
    ADD CONSTRAINT "UQ_e6b0cdba8bd0de3d13270d1c107" UNIQUE (nom);


--
-- Name: IDX_9613cace11309bbc1842c95c3f; Type: INDEX; Schema: public; Owner: franck
--

CREATE INDEX "IDX_9613cace11309bbc1842c95c3f" ON public.user_categories_categorie USING btree ("categorieId");


--
-- Name: IDX_b16914b3375538d615c16b3022; Type: INDEX; Schema: public; Owner: franck
--

CREATE INDEX "IDX_b16914b3375538d615c16b3022" ON public.user_categories_categorie USING btree ("userId");


--
-- Name: groupe FK_22f8e393d47bca967d45b192ec1; Type: FK CONSTRAINT; Schema: public; Owner: franck
--

ALTER TABLE ONLY public.groupe
    ADD CONSTRAINT "FK_22f8e393d47bca967d45b192ec1" FOREIGN KEY ("categorieId") REFERENCES public.categorie(id);


--
-- Name: poste FK_37108308945930876603a190ba1; Type: FK CONSTRAINT; Schema: public; Owner: franck
--

ALTER TABLE ONLY public.poste
    ADD CONSTRAINT "FK_37108308945930876603a190ba1" FOREIGN KEY ("groupeId") REFERENCES public.groupe(id);


--
-- Name: tarif FK_6b6b63e4ef3a8959e1c9f5b8b6e; Type: FK CONSTRAINT; Schema: public; Owner: franck
--

ALTER TABLE ONLY public.tarif
    ADD CONSTRAINT "FK_6b6b63e4ef3a8959e1c9f5b8b6e" FOREIGN KEY ("groupeId") REFERENCES public.groupe(id);


--
-- Name: user_categories_categorie FK_9613cace11309bbc1842c95c3fe; Type: FK CONSTRAINT; Schema: public; Owner: franck
--

ALTER TABLE ONLY public.user_categories_categorie
    ADD CONSTRAINT "FK_9613cace11309bbc1842c95c3fe" FOREIGN KEY ("categorieId") REFERENCES public.categorie(id);


--
-- Name: user_categories_categorie FK_b16914b3375538d615c16b3022d; Type: FK CONSTRAINT; Schema: public; Owner: franck
--

ALTER TABLE ONLY public.user_categories_categorie
    ADD CONSTRAINT "FK_b16914b3375538d615c16b3022d" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

