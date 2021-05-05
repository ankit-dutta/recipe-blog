const mongoose = require('mongoose');

const Recipe = require('./models/recipe');


const recipes = [
    {
        name:'Chicken Biryani',
        img:"https://www.myfoodwifi.com/wp-content/uploads/2018/10/WhatsApp-Image-2018-10-13-at-1.05.45-PM.jpeg",
        desc:" Recipe Chicken biryani recipe, made using dum method by marinating chicken and combining it with half cooked basmati rice and giving dum by slow cooking until the biryani is nicely done.. It is shared along with step by step details and a video procedure.This is a special eid recipe that can be made for eid all across the world and also for several festivals, weddings and occasions.",
        ingridient:`750 gms chicken cleaned and washed well salt - to taste
        1 tsp red chilli powder
        ¼ tsp turmeric powder
        1 tsp full ginger garlic paste
        ½ tsp garam masala powder (powder of cloves, cardamom, cinnamon, black pepper)
        ½ tsp black pepper powder (kali mirch powder)
        ½ bunch coriander leaves
        10-12 mint leaves
        6 green chillies vertically slit
        1 cup fried onions (5-6 medium size onions deep fried)
        1 cup beaten yogurt
        ½ tsp green cardamom powder
        1 tbsp lemon extracted juice
        1 tbsp oil
        600 gms basmati rice
salt - to taste
whole garam masala (4 small cinnamon sticks, 4 cloves, 3 cardamoms, 6-7 black pepper corns)
1 tsp shahi zeera/caraway seeds
1 tsp oil`,  

procedure:`Once you have your chicken marinated, rice and fried onions ready, start by cooking the marinated chicken. Once the chicken is partially cooked, it’s important to layer it with the fried onions, mint and coriander. The onions add sweetness and richness while the herbs add a ton of flavor. This is then layered with rice and then topped finally with soaked saffron and ghee.And there you go! The whole thing takes approximately an hour so I call this a weekend project, but after you’ve done it once, you’ll realize how easy and simple making biryani at home is! The results of your labour will look like this, and trust me, there is nothing like the smell of chicken biryani wafting through the house to get everyone to the table!Let’s just say – five attempts to make sure I provide you with instructions that you can actually follow with ease at home did not seem like work.

Also pro tip: it’s really important to use a heavy-bottomed pot when you make chicken biryani, or the chicken pieces can be scorched or burnt. A dutch oven will be your best friend while making this biryani because it heats evenly and stays warm. It also has a thick bottom that does not let your food get burnt easily.`,
nutrients:  `Calories 154 (Calories from Fat 117% Daily Value)
Fat-13g,20%
Saturated Fat-4g,25%
Trans Fat-1g
Cholesterol-3mg,1%
Sodium-133mg,6%
Potassium-33mg,1%
Carbohydrates-8g,3%
Fiber-1g,4%
Sugar-1g,1%
Protein-1g,2%
Vitamin A-191IU,4%
Vitamin C-3mg,4%
Calcium-11mg,1%
Iron 1mg`
    },
    {
        name:'Instant-Rabdi',
        img:"https://myfoodstory.com/wp-content/uploads/2021/03/Instant-Rabdi-2.jpg?fit=1200,9999",
        desc:"Here’s the short and sweet way to make delicious Instant Rabdi! I’m showing you how to cut the time to make rabdi in half with some paneer and condensed milk. It’s thick, creamy and has all the same flavours but so much faster and easier!",
        ingridient:`1 Teaspoon Ghee
        1 Pod Cardamom
        500 Millilitres Milk
        5 -6 Strands Saffron
        1 ½ Cup Homemade Paneer grated as fine as possible
        ½ Cup Condensed milk
        2 – 4 Tablespoons Sugar optional
        ⅛ Teaspoon Rose essence optional`,
procedure:`The milk should be boiled with the cardamom, ghee, and saffron for about 15 minutes till it reduces a little and you see layers of malai forming on top. Be gentle with these layers – just keep collecting them and pushing them back into the simmering milk till it thickens
Add the condensed milk and grated paneer, and cook the mixture for another 8-12 minutes. The paneer should dissolve slightly and get incorporated into the mixture.
You can add additional sugar if you like but I’ve seen that with condensed milk, there’s no need. I like my rabdi only mildly sweet because it’s usually served with other sweet dishes like gulab jamun or jalebi. But feel free, to adjust the sweetness to your taste.
Finally, serve chilled rabdi topped with sliced pistas and almonds!`,

nutrients:  `Calories: 524kcal | Carbohydrates: 47g | Protein: 19g | Fat: 30g | Saturated Fat: 18g | Cholesterol: 84mg | Sodium: 124mg | Potassium: 310mg | Fiber: 1g | Sugar: 45g | Vitamin A: 305IU | Vitamin C: 1mg | Calcium: 656mg | Iron: 1mg`

    },
    {
        name:'Hakka-Noodles',
        img:"https://myfoodstory.com/wp-content/uploads/2021/02/Vegetable-Hakka-Noodles-Restaurant-Style-2.jpg?fit=1200,9999",
        desc:"In simple terms, it’s a Chinese dish that’s prepared with cooked noodles, veggies, and proteins. The sauce or seasoning is milder than, let’s say, Schezwan noodles, for example. All the flavour comes from the veggies and noodles being tossed together in a really hot wok with just a few sauces.",
        ingridient:`250 Grams Noodles hakka, egg or lo mein noodles
        2 Teaspoons Salt,Water for boiling, 2 Tablespoons Oil, 1/2 Teaspoon toasted Sesame Oil,2-3 Green Chillies slit lengthwise,1 Tablespoon Garlic minced,½ Tablespoon Ginger minced, 1 Tablespoon Celery finely chopped,½ Cup Onion thinly sliced½ Cup Carrot julienned
        ½ Cup Beans sliced diagonally
        ½ Cup Capsicum thinly sliced
        1 Cup Cabbage thinly shredded
        2 Teaspoons Soy Sauce
        1 Teaspoon Vinegar
        1-2 Teaspoons Red Chilli Sauce
        ½ Teaspoon Tomato Ketchup
        1 Teaspoon Salt adjust to taste
        1 Teaspoon Pepper
        1 Tablespoon Spring Onion chopped for garnish`,  

procedure:`Here are some tips to take you through the process for Hakka Noodles
The noodles should be cooked just right – do a bite test with a single strand of noodles!Make sure the veggies are all cut in approximately the same size so that they cook evenlMake sure your wok is super hot. The mise en place should be ready so that as soon as your wok is hot, you can start cooking. These hakka noodles only take minutes to cook!Stir-fry the veggies on high heat. The aim is to lightly cook the veggies by stir-frying so that they remain crunchy. Soggy veggies are no fun!Carefully stir fry the noodles – overdoing this can make the noodles stick to each other and ruin the dish
Thinking of making a different version of this hakka noodles recipe? Here are some ideas:
You can add any veggies you like to this dish – mushrooms, broccoli, red and yellow bell peppersIf you’re planning on making a non-vegetarian version, here are some protein options – Scramble in some eggs at the endAdd some diced chicken pieces and lightly fry them along with the veggies. Thinly sliced or inch long diced chicken cooks really fast if you add it along with the carrotsYou could also add some prawns along with the veggies – prawns cook very fast so keep an eye on them so that they don’t get overcooked.`,

nutrients:  `Calories: 357kcal | Carbohydrates: 56g | Protein: 11g | Fat: 11g | Saturated Fat: 1g | Trans Fat: 1g | Sodium: 2263mg | Potassium: 297mg | Fiber: 5g | Sugar: 5g | Vitamin A: 3306IU | Vitamin C: 37mg | Calcium: 50mg | Iron: 2mg`
    },
    {
        name:'Veggie-Pasta',
        img:"https://myfoodstory.com/wp-content/uploads/2015/09/all-in-sunday-veggie-pasta-recipe.1024x1024-2.jpg",
        desc:"Here’s an All-In Sunday Veggie Pasta because weekends were made for us to put all the veggies sitting in the fridge into a skillet and make some quick and comforting pasta while catching up on our favorite TV shows! This easy, breezy and super cheesy recipe keeps that Sunday spirit alive and is for the lazy foodies out there!",
        ingridient:`1 1/2 cups Fusilli Dry Pasta
        2 tablespoons Olive Oil
        1 tablespoon Garlic minced
        1 cup Button Mushrooms sliced
        1/2 cup Cherry Tomatoes
        3/4 cup Spinach roughly chopped
        2 tablespoons All Purpose Flour or Maida
        1 1/2 cups Milk
        1 teaspoon Chili Flakes
        1 cup Barilla’s Basilico Sauce
        Salt and Pepper to taste
        1/2 cup Cheddar Cheese grated
        A few sprigs Basil Fresh`,  

procedure:`Cook pasta according to package instructions, until al dente.In a pan, heat olive oil and garlic. Stir fry for a minute and add the sliced mushrooms. Switch the heat to high and saute mushrooms till golden brown on both sides.Add flour and cook for a minute. Pour milk in slowly while stirring continuously to avoid lumps. Keep stirring (use a whisk if you like to make sure the flour mixes well with the milk) and bring this to a boil. The sauce will start to thicken.Reduce heat and add the cherry tomatoes. Cook for 3-4 minutes and add the pasta sauce, chili flakes, salt and pepper. Mix well.Stir in the pasta and spinach till the sauce coats the pasta evenly. Add some more milk and stir if the sauce is too thick.Top with grated cheese, and cover and cook for 3-4 minutes till the cheese melts and the sauce starts bubbling.Switch off the flame, and sprinkle with fresh basil and extra virgin olive oil. Serve hot.`,
nutrients:  `Calories: 507kcal | Carbohydrates: 32g | Protein: 13g | Fat: 37g | Saturated Fat: 11g | Cholesterol: 33mg | Sodium: 580mg | Potassium: 333mg | Fiber: 1g | Sugar: 6g | Vitamin A: 908IU | Vitamin C: 9mg | Calcium: 219mg | Iron: 1mg`
    }
     
]

const seedDB = async()=>{
    await Recipe.insertMany(recipes);
    console.log('seeded')
}
module.exports = seedDB;