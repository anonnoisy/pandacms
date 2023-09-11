<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Arsha Bootstrap Template - Index</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link href="/assets/templates/{{$template}}/img/favicon.png" rel="icon">
    <link href="/assets/templates/{{$template}}/img/apple-touch-icon.png" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Jost:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="/assets/templates/{{$template}}/vendor/aos/aos.css" rel="stylesheet">
    <link href="/assets/templates/{{$template}}/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="/assets/templates/{{$template}}/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="/assets/templates/{{$template}}/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="/assets/templates/{{$template}}/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
    <link href="/assets/templates/{{$template}}/vendor/remixicon/remixicon.css" rel="stylesheet">
    <link href="/assets/templates/{{$template}}/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

    <!-- Template Main CSS File -->
    <link href="/assets/templates/{{$template}}/css/style.css" rel="stylesheet">
</head>

<body>

    <!-- ======= Header ======= -->
    @include("templates.$template.components.navbar", [
        'menus' => $components['menus']
    ])
    <!-- ======= End Header ======= -->

    <main id="main">

        @foreach ($sections as $section)
            @include("templates.{$template}.sections.{$section->slug}", [
                'section' => $section
            ])
        @endforeach

        <!-- ======= Hero Section ======= -->
        {{-- @include("templates.arsha.sections.hero") --}}
        <!-- End Hero -->

        <!-- ======= Clients Section ======= -->
        {{-- @include('templates.arsha.sections.client') --}}
        <!-- End Cliens Section -->

        <!-- ======= About Us Section ======= -->
        {{-- @include('templates.arsha.sections.about') --}}
        <!-- End About Us Section -->

        <!-- ======= Why Us Section ======= -->
        {{-- @include('templates.arsha.sections.why-us') --}}
        <!-- End Why Us Section -->

        <!-- ======= Skills Section ======= -->
        {{-- @include('templates.arsha.sections.skill') --}}
        <!-- End Skills Section -->

        <!-- ======= Services Section ======= -->
        {{-- @include('templates.arsha.sections.service') --}}
        <!-- End Services Section -->

        <!-- ======= Portfolio Section ======= -->
        {{-- @include('templates.arsha.sections.portfolio') --}}
        <!-- End Portfolio Section -->

        <!-- ======= Team Section ======= -->
        {{-- @include('templates.arsha.sections.team') --}}
        <!-- End Team Section -->

        <!-- ======= Frequently Asked Questions Section ======= -->
        {{-- @include('templates.arsha.sections.faq') --}}
        <!-- End Frequently Asked Questions Section -->

        <!-- ======= Contact Section ======= -->
        {{-- @include('templates.arsha.sections.contact') --}}
        <!-- End Contact Section -->

        {{-- @include('templates.arsha.sections.newsletter') --}}

    </main><!-- End #main -->

    <!-- ======= Footer ======= -->
    @include('templates.arsha.components.footer')
    <!-- ======= End Footer ======= -->

    <div id="preloader"></div>
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

    <!-- Vendor JS Files -->
    <script src="/assets/templates/{{$template}}/vendor/aos/aos.js"></script>
    <script src="/assets/templates/{{$template}}/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="/assets/templates/{{$template}}/vendor/glightbox/js/glightbox.min.js"></script>
    <script src="/assets/templates/{{$template}}/vendor/isotope-layout/isotope.pkgd.min.js"></script>
    <script src="/assets/templates/{{$template}}/vendor/swiper/swiper-bundle.min.js"></script>
    <script src="/assets/templates/{{$template}}/vendor/waypoints/noframework.waypoints.js"></script>
    <script src="/assets/templates/{{$template}}/vendor/php-email-form/validate.js"></script>

    <!-- Template Main JS File -->
    <script src="/assets/templates/{{$template}}/js/main.js"></script>
</body>
</html>
