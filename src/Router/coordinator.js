export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToProfilePage = (navigate, nome) => {
    navigate(`/profile/${nome}`)
}

export const ProfileProduct = (navigate, id) => {
    navigate(`/product/${id}`)
}