import { LayoutDashboard, Star, FileText, MapPin, BarChart2, Settings } from 'lucide-react';
import type { MenuItem, Review, Post, GeoPoint } from './types';

export const MENU_ITEMS: MenuItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'reviews', label: 'Avaliações', icon: Star },
  { id: 'posts', label: 'Postagens', icon: FileText },
  { id: 'geoseo', label: 'GeoSEO', icon: MapPin },
  { id: 'analytics', label: 'Analytics', icon: BarChart2 },
  { id: 'settings', label: 'Configurações', icon: Settings },
];

export const MOCK_REVIEWS: Review[] = [
    {
        id: 1,
        author: "Carlos Silva",
        date: "2 dias atrás",
        rating: 5,
        text: "Atendimento fantástico e produto de altíssima qualidade. Recomendo fortemente a todos na região!",
        reply: "Obrigado, Carlos! Ficamos felizes em saber que você teve uma ótima experiência. Volte sempre!",
    },
    {
        id: 2,
        author: "Mariana Costa",
        date: "5 dias atrás",
        rating: 2,
        text: "A localização é boa, mas o serviço deixou a desejar. A espera foi muito longa e não resolveram meu problema.",
        reply: null,
    },
    {
        id: 3,
        author: "Rafael Pereira",
        date: "1 semana atrás",
        rating: 4,
        text: "Gostei bastante do ambiente e dos preços. Apenas um pequeno detalhe no pedido que veio trocado, mas foi resolvido.",
        reply: null,
    },
];

export const MOCK_ANALYTICS = {
    trustScore: 4.6,
    totalReviews: 128,
};

export const MOCK_POSTS: Post[] = [
    {
        id: 1,
        text: "☕️ Comece sua semana com o pé direito! Nosso café especial está com 20% de desconto até sexta-feira. Venha nos visitar! #CafeDaSemana #Promoção #SuaCidade",
        imageUrl: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=2940&auto=format&fit=crop",
        date: "20 de Julho de 2024",
        views: 1250,
    },
    {
        id: 2,
        text: "☀️ O verão chegou e com ele nossas novas bebidas refrescantes! Experimente o Iced Latte de Caramelo. É uma delícia! #Verao2024 #BebidaGelada #NegocioLocal",
        imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2787&auto=format&fit=crop",
        date: "15 de Julho de 2024",
        views: 2800,
    },
     {
        id: 3,
        text: "Estamos abertos! 🎉 Venha conferir nosso novo espaço, pensado com muito carinho para você. Esperamos sua visita! #Inauguracao #Novidade #ComercioLocal",
        imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2940&auto=format&fit=crop",
        date: "10 de Julho de 2024",
        views: 4500,
    },
];

export const MOCK_PERFORMANCE_DATA = [
    { date: "Jan", views: 2400, searches: 1800, actions: 300 },
    { date: "Fev", views: 2200, searches: 2000, actions: 350 },
    { date: "Mar", views: 3000, searches: 2500, actions: 400 },
    { date: "Abr", views: 2780, searches: 2300, actions: 450 },
    { date: "Mai", views: 3500, searches: 2800, actions: 500 },
    { date: "Jun", views: 4100, searches: 3200, actions: 550 },
];

export const MOCK_REVIEW_DISTRIBUTION = [
    { rating: 5, count: 85 },
    { rating: 4, count: 25 },
    { rating: 3, count: 10 },
    { rating: 2, count: 5 },
    { rating: 1, count: 3 },
];

export const MOCK_GEO_POINTS: GeoPoint[] = [
    { name: "Pesquisas Diretas", value: 4500, color: "text-indigo-400" },
    { name: "Pesquisas de Descoberta", value: 8200, color: "text-cyan-400" },
    { name: "Visualizações no Mapa", value: 12300, color: "text-green-400" },
    { name: "Cliques para o Site", value: 2100, color: "text-yellow-400" },
];
