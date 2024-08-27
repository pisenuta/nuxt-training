export function useCounter() {
  const count = ref(0)
  const increment = () => count.value++

  return { count, increment }
}

export function useCounte2() {
  const count2 = ref(0)
  const increment2 = () => count2.value++

  return { count2, increment2 }
}
