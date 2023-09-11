<header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">
        <h1 class="logo me-auto">
            <a href="index.html">Arsha</a>
        </h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html" class="logo me-auto"><img src="/assets/templates/{{$template}}/img/logo.png" alt="" class="img-fluid"></a>-->

        <nav id="navbar" class="navbar">
            <ul>
                @foreach ($menus as $menu)
                    @if (empty($menu->sub_menus))
                        <li><a class="nav-link scrollto {{ $menu->primary ? 'active' : '' }}" href="{{ $menu->link }}">{{ $menu->label }}</a></li>
                    @else
                        <li class="dropdown"><a href="#"><span>{{$menu->label}}</span> <i class="bi bi-chevron-down"></i></a>
                            <ul>
                                @foreach ($menu->sub_menus as $sub_menu)
                                    <li><a href="{{$sub_menu->link}}">{{$sub_menu->label}}</a></li>
                                @endforeach
                            </ul>
                        </li>
                    @endif
                @endforeach
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
    </div>
</header>
