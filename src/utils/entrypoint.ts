import type { Alpine } from "alpinejs";
import sort from '@alpinejs/sort'

export default (Alpine: Alpine) => {
    Alpine.plugin(sort)
}