PGDMP      /                |            prueba1    16.2    16.2 
    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16394    prueba1    DATABASE     {   CREATE DATABASE prueba1 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Mexico.1252';
    DROP DATABASE prueba1;
                postgres    false            �            1259    16399    autor    TABLE     �   CREATE TABLE public.autor (
    id_author integer NOT NULL,
    name character varying,
    lastname character varying,
    date_of_birth date,
    email character varying,
    phone_number character varying
);
    DROP TABLE public.autor;
       public         heap    postgres    false            �            1259    16402    post    TABLE     �   CREATE TABLE public.post (
    id_post integer NOT NULL,
    title character varying,
    date date,
    image character varying,
    text text,
    id_author integer
);
    DROP TABLE public.post;
       public         heap    postgres    false            �          0    16399    autor 
   TABLE DATA           ^   COPY public.autor (id_author, name, lastname, date_of_birth, email, phone_number) FROM stdin;
    public          postgres    false    215   �	       �          0    16402    post 
   TABLE DATA           L   COPY public.post (id_post, title, date, image, text, id_author) FROM stdin;
    public          postgres    false    216   9
       T           2606    16408    autor autor_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.autor
    ADD CONSTRAINT autor_pkey PRIMARY KEY (id_author);
 :   ALTER TABLE ONLY public.autor DROP CONSTRAINT autor_pkey;
       public            postgres    false    215            V           2606    16412    post post_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.post
    ADD CONSTRAINT post_pkey PRIMARY KEY (id_post);
 8   ALTER TABLE ONLY public.post DROP CONSTRAINT post_pkey;
       public            postgres    false    216            �   ?   x�3����K,�H-J��4200�50�52���/J��,(.�u 3���s9���rl����� ^�]      �   �   x�]�M� F��)�����Ҹ���&���ؠml��<��V0aÛ�}���E�U�X	����e��8wHU�L!#�0�G��@�u]�.�^�A�����^��=:$�����Z�a,g0��Ԣ�{e��iȥ-�!LlV_��K�UB�g�^�hX�����b�8$�?s�lIo�l�񟼁�B���uR<�H�t��NX�dG@Z|�B�Ň     