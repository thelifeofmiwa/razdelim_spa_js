<template>
	<div id="start">
		<header>
			<h1>Разделим!</h1>
			<h2>
				Удобный способ разделить счёт в кофейне или кафе
			</h2>
		</header>

		<div class="content">
			<p>
				"Разделим" - самый простой и приятный способ<br />
				оставить от прошедшего вечера только приятные
				впечатления!<br />
				Укажите <b>количество друзей</b> и
				<b>цену</b> позиции, а мы всё посчитаем за вас!
			</p>
		</div>
		<v-btn variant="outlined">Начать</v-btn>
	</div>
</template>

<script>
export default {
	name: "start-page",
};
</script>

<style scoped>
header {
	text-align: center;
}
</style>
