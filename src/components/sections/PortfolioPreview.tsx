import Link from 'next/link';
import React from 'react';

const featuredProjects = [
    {
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxkmIS_aEzAnh0dD0qimxfsIlxEpswKJnPAW4Pu_d3GGrQ7kv7GCRK99dnLUf6i5JyzUq3O8bl3DpNljSVMlCl0vbcipjceUa300egi-5TGjAE8PC6ycjpwBvB-FHP0vkAmEUeLh9Tnfqy-Cn5IGFpJ0x-4iOJ-tXLJmW5bxbAe1is9PlN6qAHOnLpaRoMWSCPiH_4r8giU2t03m48NonZIRPEzQ-TlGPgQy73XVy9ZjKalpYlCu5v8WWJl5Jq3xVhCJMvzSTuj-o',
        title: 'Сканди-Модерн',
        price: '520 000 ₽',
        duration: '14 дней',
    },
    {
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCxb5hU_DF5j9YxfX7RXk6Kwkpb-83I3I6-dHgKoPop_8rZqfncP4PZJONlWD81ryMesl0rl95gbHS1DsiWlAY5ppvbSyYfkiTfYX3nEV-2UtR4W0-PFvRAe7RaZBe3grTYzrj1LEs1Ihz_BgZUDPctnyTCqolhKCzOGIsB8OoHpxuZSEBPhfvWS08GeM43Fwmf0xsbxUuOdW3toa3ARvMyPh73x0_ZCtdiwXFkQGpHfwKhxVEKXVX0a_lS9UOHF_XNqN76mXCrNY',
        title: 'Минимализм White',
        price: '480 000 ₽',
        duration: '10 дней',
    },
    {
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4r70GxKZ_1MVbz6YrsDiRCybIfLw2TkqQS-Rc3uJ7UPCY_dC4Fmvp0kGMLqTD_S8PX-lyOf55ZPaexnkJNZG--urVc3DTDH0dsJtcjjzfVGuGpMqj-j1Q1uv0mdmvkrETFgDnzHIuUYMxgyUpJmrp3gKhPSyEWnpq_vd3R_vRKnImvVh8wJs7_AaK93dWWdKE15HTA_LQNeir9JxVsEYSI9SM8yOJOE5-7X9UltMxipS-e8Y88SVfwvs4f88mIOA42B7M4A1Yq_Q',
        title: 'Индустриальный Лофт',
        price: '650 000 ₽',
        duration: '21 день',
    },
];

export const PortfolioPreview: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                            <span className="material-symbols-outlined !text-sm">photo_library</span>
                            Портфолио
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-text-dark tracking-tight">
                            Наши последние работы
                        </h2>
                        <p className="text-text-secondary text-lg mt-2 max-w-xl">
                            Каждый проект — это уникальное решение под ваши потребности
                        </p>
                    </div>
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group"
                    >
                        Все проекты
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProjects.map((project, index) => (
                        <Link
                            key={index}
                            href="/portfolio"
                            className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url('${project.image}')` }}
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Badges */}
                            <div className="absolute top-4 left-4 right-4 flex justify-between">
                                <span className="px-3 py-1.5 bg-primary text-text-dark text-xs font-bold rounded-full flex items-center gap-1">
                                    <span className="material-symbols-outlined !text-[14px]">payments</span>
                                    {project.price}
                                </span>
                                <span className="px-3 py-1.5 bg-white/90 text-text-dark text-xs font-bold rounded-full flex items-center gap-1">
                                    <span className="material-symbols-outlined !text-[14px]">schedule</span>
                                    {project.duration}
                                </span>
                            </div>

                            {/* Title */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <span className="text-white/80 text-sm flex items-center gap-1 group-hover:text-primary transition-colors">
                                    Подробнее
                                    <span className="material-symbols-outlined !text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
