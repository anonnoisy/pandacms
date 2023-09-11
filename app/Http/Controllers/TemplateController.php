<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TemplateController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return view('templates.arsha.index', [
            'template' => 'arsha',
            'components' => [
                'menus' => $this->handleGetMenu()
            ],
            'sections'  => $this->handleGetSections()
        ]);
    }

    protected function handleGetMenu()
    {
        return [
            (object) [
                'id'        => 1,
                'label'     => 'Home',
                'slug'      => 'home',
                'link'      => '#hero',
                'link_type' => 'static',
                'primary'   => true,
                'menu_id'   => null,
            ],
            (object) [
                'id'        => 2,
                'label'     => 'About',
                'slug'      => 'about',
                'link'      => '#about',
                'link_type' => 'static',
                'primary'   => false,
                'menu_id'   => null,
            ],
            (object) [
                'id'        => 3,
                'label'     => 'Services',
                'slug'      => 'services',
                'link'      => '#services',
                'link_type' => 'static',
                'primary'   => false,
                'menu_id'   => null,
            ],
            (object) [
                'id'        => 4,
                'label'     => 'Dropdown',
                'slug'      => 'dropdown',
                'sub_menus' => [
                    (object) [
                        'id'        => 5,
                        'label'     => 'About',
                        'slug'      => 'about',
                        'link'      => '#about',
                        'link_type' => 'static',
                        'primary'   => false,
                        'menu_id'   => 4,
                    ],
                    (object) [
                        'id'        => 6,
                        'label'     => 'Services',
                        'slug'      => 'services',
                        'link'      => '#services',
                        'link_type' => 'static',
                        'primary'   => false,
                        'menu_id'   => 4,
                    ],
                ],
            ],
            (object) [
                'id'        => 7,
                'label'     => 'Portfolio',
                'slug'      => 'portfolio',
                'link'      => '#portfolio',
                'link_type' => 'static',
                'primary'   => false,
                'menu_id'   => null,
            ],
            (object) [
                'id'        => 8,
                'label'     => 'Team',
                'slug'      => 'team',
                'link'      => '#team',
                'link_type' => 'static',
                'primary'   => false,
                'menu_id'   => null,
            ],
            (object) [
                'id'        => 9,
                'label'     => 'Contact',
                'slug'      => 'contact',
                'link'      => '#contact',
                'link_type' => 'static',
                'primary'   => false,
                'menu_id'   => null,
            ],
        ];
    }

    protected function handleGetSections()
    {
        return [
            (object) [
                'id'            => 1,
                'label'         => 'Hero',
                'slug'          => 'hero',
                'category_id'   => 1,
                'content'       => (object) [
                    'title'         => 'Better Solutions For Your Business',
                    'content'       => 'We are team of talented designers making websites with Bootstrap',
                    'section_id'    => 1,
                ],
                'images'       => [
                    (object) [
                        'label'         => 'Hero Image Background',
                        'slug'          => 'hero-img-bg',
                        'link'          => '/assets/templates/arsha/img/hero-img.png',
                        'primary'       => true,
                        'section_id'    => 1,
                    ]
                ]
            ]
        ];
    }
}
