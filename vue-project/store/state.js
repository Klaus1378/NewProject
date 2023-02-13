export default function state() {
    return {
      activeProduct: null,
        search: "",
        products: [
            { id: 1,
              name: 'The Last Kingdom',
              url: 'https://www.adjaranet.com/movies/1001768/The-Last-Kingdom?lang=GEO&quality=SD&season=1&episode=1',
              description: 'სიუჟეტი მოგვითხრობს იმ დროზე, როცა ქვეყანას მეფე უესექს ალფრედ დიდებული მართავდა. მან მოახერხა დამპყრობელი ვიკინგებისგან ბრიტანეთის მიწების დაბრუნება',
              cover: 'https://flxt.tmsimg.com/assets/p12079367_b_v8_an.jpg'  },
            { id: 2,
              name: 'Vikings',
              url: 'https://www.adjaranet.com/movies/1000050/Vikings?lang=GEO&quality=SD&season=1&episode=1',
              description: 'სერიალი მოგვითხრობს რაგნარის ვიკინგების რაზმზე. ის აჯანყდა იმისთვის, რომ გამხდარიყო ვიკინგების მეფე. ნორვეგიული ლეგენდის მიხედვით, ის ოდინის (ომის და მეომრების ღმერთის) პირდაპირი შთამომავალია.',
              cover: 'https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg'   },
            { id: 3,
              name: 'Game Of Thrones',
              url: 'https://www.adjaranet.com/movies/1000010/Game-of-Thrones?lang=GEO&quality=SD&season=1&episode=1',
              description: 'ჯ. რ. რ. მარტინის ფენტეზი საგის „ყინულისა და ცეცხლის სიმღერის“ ადაპტაცია - სატახტო გვარების სისხლიანი ბრძოლა ვესტეროსისა და მისი რკინის ტახტის მოსაპოვებლად. სანამ დიდებული გვარები სატახტო თამაშებში არიან ჩართულნი, ჩრდილოეთით, ყინულის კედლის მიღმა მაგიური არმია იღვიძებს და ყველაფერს განადგურებით ემუქრება.',
              cover: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg" },
            { id: 4, 
              name: 'Breaking Bad',
              url: 'https://www.adjaranet.com/movies/1000024/Breaking-Bad?lang=GEO&quality=SD&season=1&episode=1',
              description: 'უოლტერ უაიტი ქიმიის მასწავლებელია სკოლაში, რომელსაც ფილტვის სიმსივნე აღმოაჩნდა. იმ მიზნით რომ სიკვდილის შემდეგ ოჯახს კარგი ფინანსურ მდგომარეობა დაუტოვოს, იგი ცვლის საკუთარ ცხოვრებას - იწყებს მეტამფეტამინის წარმოებას და გაყიდვას, რაშიც მისი ყოფილი მოწაფე ჯესი პინკმენი ეხმარება.',
              cover: "https://m.media-amazon.com/images/M/MV5BYTU3NWI5OGMtZmZhNy00MjVmLTk1YzAtZjA3ZDA3NzcyNDUxXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_.jpg" },
              ,
        ],
        cart: []
    }
}