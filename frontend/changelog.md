# Курсор

## **0.0.0 - 12.05.2023**
### **Изменения**
- #### **Изменено отображение профиля**
    Оно стало более простым за счёт вынесения имени и фамилии. Также была изменена иконка треугольника, которая стала полностью закрашена и пропорции которой были изменены. Профиль также потерял собственное фоновое выделение - теперь оно проявляется только при наведении.
- #### **Изменено отображение выпадающего меню профиля**
    Меню смещено относительно своей старой позиции. Его рамка была имзенена в размерах и её цвет стал ярче. Все пункты в след за рамкой также изменили свои размеры границ и их цвета, чтобы соответсвовать стилю меню. Сами пункты меню изменили свои цвета фона и выделения.
- #### **Добавлен класс Material**
    Данный класс является переосмыслением задач. Он позволяет курсам предоставлять одновременно теоретические и практические материалы, представленные совокупностью задач, чьё количесвто определяется автором материала. Это также озночает, что теперь задачи переносятся из курса в материалы.
- #### **Подключен Redux (Toolkit)**
    Этот пункт позволит более удобно управлять состояниями в приложении и в перспективе тратить меньше времени на продумывание структуры тех значений, которые требовалось постоянно передавать ранее, пробрасывая в пропсы.
- #### **Начата разработка первого курса**
    Для этого были созданы необходимые классы, опеределена индивидуальная файловая структура курса. Он будет включать в себя упражнения по управленческому учёту.
- #### **Упрощён нейминг**
    Вместо старых длинных названий стали использоваться сокращения по типу `PCourse`, что означает `PageCourse` и `BP` - `baseP`.
    
### **Исправления**
- #### **Переход на правильные пропорции**
    Для базовой адаптивности стали использоваться более подходящие для этого единицы измерения, такие как `vh`, `vw`, `rem` и т.д.
- #### **Поправлены адреса при выходе из профиля**
    Раньше выход вместо радикального изменения адреса лишь прибавлял к нему указанный путь из-за чего адрес портился. Теперь же он корректно перемещает пользователя к форме регистрации.
- #### **Корректировка цветовой гаммы у боковой выдвигающейся панели и задачника (раздела материалов)**
    Данное изменение сделало их цвета менее болотными, более яркими и привлекательными.
    
***