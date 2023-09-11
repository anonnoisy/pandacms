<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use App\Http\Requests\Content\Menu\MenuStoreRequest;
use App\Http\Requests\Content\Menu\MenuUpdateRequest;
use App\Models\Content\Menu;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $menus = Menu::all();

        return Inertia::render('Menu/Index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\Content\Menu\MenuStoreRequest $request
     *
     * @return \Inertia\Response
     *
     * @throws Exception
     */
    public function store(MenuStoreRequest $request)
    {
        try {
            $menu = DB::transaction(function () use ($request) {
                $menu = Menu::create([
                    'label'     => $request->label,
                    'slug'      => Str::slug($request->label),
                    'link'      => $request->link,
                    'link_type' => $request->link_type,
                    'primary'   => $request->primary,
                ]);

                if (!empty($request->sub_menus)) {
                    foreach ($request->sub_menus as $sub_menu) {
                        Menu::create([
                            'label'     => $sub_menu['label'],
                            'slug'      => Str::slug($sub_menu['label']),
                            'link'      => $sub_menu['link'],
                            'link_type' => $sub_menu['link_type'],
                            'primary'   => $sub_menu['primary'],
                            'menu_id'   => $menu->id,
                        ]);
                    }
                }

                return $menu->refresh();
            });
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     *
     * @return \Inertia\Response
     *
     * @throws Exception
     */
    public function show(int $id)
    {
        try {
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     *
     * @return \Inertia\Response
     *
     * @throws Exception
     */
    public function edit(int $id)
    {
        try {
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\Content\Menu\MenuUpdateRequest $request
     * @param int $id
     *
     * @return \Inertia\Response
     *
     * @throws Exception
     */
    public function update(MenuUpdateRequest $request, int $id)
    {
        try {
            $menu = DB::transaction(function () use ($request, $id) {
                $menu = Menu::findOrFail($id);
                $menu->update($id);

                if (!empty($request->sub_menus)) {
                    $subMenuIds = collect($request->sub_menu)->pluck('id')->toArray();
                    Menu::whereIn('id', $subMenuIds)->delete();

                    foreach ($request->sub_menus as $sub_menu) {
                        Menu::create([
                            'label'     => $sub_menu['label'],
                            'slug'      => Str::slug($sub_menu['label']),
                            'link'      => $sub_menu['link'],
                            'link_type' => $sub_menu['link_type'],
                            'primary'   => $sub_menu['primary'],
                            'menu_id'   => $id,
                        ]);
                    }
                }

                return $menu->refresh();
            });
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     *
     * @return \Inertia\Response
     *
     * @throws Exception
     */
    public function destroy(int $id)
    {
        try {
            $menu = DB::transaction(function () use ($id) {
                $menu = Menu::where('id', $id)->whereHas('sub_menus', function ($query) {
                    $query->delete();
                })->delete();

                return $menu;
            });
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
