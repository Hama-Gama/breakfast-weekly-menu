import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Clock } from "lucide-react";
import { Button } from "./ui/button";

const WEEK_MENU = [
{
dayIndex: 0,
title: "Овсянка",
ingredients: ["овсяные хлопья", "молоко", "фрукты"],
time: "09:00",
},
{
dayIndex: 1,
title: "Рисовая каша",
ingredients: ["Рис", "Масло", "Молоко", "Хлеб", "Фрукты-Банан"],
time: "09:00",
},
{
dayIndex: 2,
title: "Яичница",
ingredients: ["яйца", "масло", "хлеб", "Болгар перец", "Лук", "Морковь"],
time: "09:30",
},
{
dayIndex: 3,
title: "Гречневая каша",
ingredients: ["гречка", "молоко", "масло"],
time: "09:00",
},
{
dayIndex: 4,
title: "Пшённая каша",
ingredients: ["пшено", "молоко", "масло"],
time: "09:00",
},
{
dayIndex: 5,
title: "Яичница",
ingredients: ["яйца", "масло", "хлеб"],
time: "09:00",
},
{
dayIndex: 6,
title: "Смузи",
ingredients: ["сметана", "Творог", "Варенные яйца", "Фрукты"],
time: "09:30",
},
];


// ====== утилиты ======
const getWeekDatesFromToday = () => {
const today = new Date();
return Array.from({ length: 7 }).map((_, i) => {
const d = new Date(today);
d.setDate(today.getDate() + i);
return d;
});
};

const formatDate = (date: Date) =>
	date
		.toLocaleDateString('ru-RU', {
			weekday: 'long',
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
		})
		.replace(' г.', '')


// ====== компонент ======
export default function WeeklyBreakfastPlanner() {
const today = new Date();
const todayDayIndex = (today.getDay() + 6) % 7; // делаем понедельник = 0


const dates = getWeekDatesFromToday();


return (
	<div className='max-w-[500px] m-auto space-y-4 px-[10px] py-[15px] text-2xl'>
		{dates.map((date, offset) => {
			const dayIndex = (todayDayIndex + offset) % 7
			const menu = WEEK_MENU.find(m => m.dayIndex === dayIndex)!
			const isToday = offset === 0

			return (
				<Card
					key={date.toISOString()}
					className={isToday ? 'border-primary shadow-lg' : 'opacity-90'}
				>
					<CardHeader className='text-lg flex flex-row items-center justify-between'>
						<CardTitle className='text-lg capitalize'>
							{formatDate(date)}
						</CardTitle>
						{isToday && <Badge className='text-lg px-4'>Сегодня</Badge>}
					</CardHeader>
					<CardContent className='space-y-2'>
						<Badge className='px-6 h-auto'>
							<div className='font-semibold text-lg'>{menu.title}</div>
						</Badge>

						<ul className='list-disc pl-5 text-lg text-muted-foreground'>
							{menu.ingredients.map(i => (
								<li key={i}>{i}</li>
							))}
						</ul>

						<div className='flex items-center gap-2 text-lg'>
							<Clock className='h-4 w-4' />
							{menu.time}
						</div>
					</CardContent>
				</Card>
			)
		})}
	</div>
)
}