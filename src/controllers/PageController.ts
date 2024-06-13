import { Request, Response } from "express";

export const home = async (req: Request, res: Response) => {

    res.render('pages/page');
};

export const dogs = async (req: Request, res: Response) => {


    res.render('pages/page');
};

export const cats = async (req: Request, res: Response) => {


    res.render('pages/page');
};

export const fishes = async (req: Request, res: Response) => {


    res.render('pages/fishes');
};

export const notFound = async (req: Request, res: Response) => {
    res.send('Pagina não encontrada');
};
