import styles from './explore.module.css'

function Explore() {
    return(
        <>
            <div className={styles.content}>
                <h2>Explorar Doações</h2>
                <div className={styles.wrapper}>
                    <input type="text" placeholder='O que você procura?' />
                    <select placeholder="Todas as localizações" name="" id="">
                        <option value="" disabled selected>
                            Localizações
                        </option>
                        <option value="">
                            São Paulo
                        </option>
                        <option value="">
                            Rio de Janeiro
                        </option>
                        <option value="">
                            Belo Horizonte
                        </option>
                    </select>
                    <select placeholder="Todas as categorias" name="" id="">
                    <option value="" disabled selected>Categorias</option>
                        <option value="">
                            Roupas
                        </option>
                        <option value="">
                            Alimentos
                        </option>
                        <option value="">
                            Produtos
                        </option>
                    </select> 
                    <button>Buscar</button>
                </div>
            </div>
        </>
    )
}


export default Explore