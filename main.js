
    let btn1 = document.getElementById('btn1');

    btn1.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    $(document).ready(function () {
        $('#mode').click(function () {
            $('body').toggleClass('dark-mode');
    
            $('#mode').toggleClass('btn-outline-secondary btn-outline-light');
    
            if ($('#mode').text() === 'dark mode') {
                $('#mode').text('light mode');
            } else if ($('#mode').text() === 'light mode') {
                $('#mode').text('dark mode');
            
            }
        });
    });
