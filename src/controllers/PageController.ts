import { Request, Response } from "express";

export const home = async (req: Request, res: Response) => {

    res.render('pages/page', {
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    });
};

export const dogs = async (req: Request, res: Response) => {

    res.render('pages/page', {
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        }
    });
};

export const cats = async (req: Request, res: Response) => {

    res.render('pages/page', {
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        }
    });
};

export const fishes = async (req: Request, res: Response) => {

    res.render('pages/page', {
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        }
    });
};

export const notFound = async (req: Request, res: Response) => {
    res.send('Pagina não encontrada');
};
